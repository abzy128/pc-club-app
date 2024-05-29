<script lang="ts">
import {ref} from 'vue'
import { useUserTokenStore } from '../../store/UserTokenStore';
import router from '../../routes/router'

export default {
    async setup(){
        let UserTokenStore = useUserTokenStore(), response, endTime:any, timeRemained:any;

        async function getEndTime(){
            let response = await fetch('https://abzy-server:5001/api/play-session', {
                method: 'GET',
                headers: new Headers({
                            'Authorization' : 'Bearer ' + UserTokenStore.userToken
                })
            }).then(async (res) => {return await res.json()})
        
            if(response.endTime != ''){
                endTime = response.endTime;
                endTime = Date.parse(endTime)
                timeRemained = endTime - Date.now();
            }
            else 
                UserTokenStore.userToken = ''
        }
        let hour:any, minute:any, second:any, end:any;

        async function start() {
            await getEndTime();
        
            hour = ref(Math.floor(timeRemained/3600000)), minute = ref(Math.floor(timeRemained/60000) - hour.value * 60), second = ref(Math.floor(timeRemained/1000) - (minute.value * 60 + hour.value * 60 * 60)), end = ref(false);
        
            let Interval = setInterval(() => {
                if(hour.value == 0 && minute.value == 0 && second.value == 0){
                    end.value = true;
                    clearInterval(Interval);
                    UserTokenStore.userToken = '';
                    router.push('/login')
                }

                else{
                    if(second.value == 0 && (minute.value > 0 || hour.value > 0)){
                        if(minute.value > 0)
                            minute.value--;
                        if(hour.value > 0){
                            hour.value--;
                            minute.value = 59;
                        }
                        second.value = 59;
                    } else{
                        second.value--;
                    }
                }
            }, 1000);
        }

        await start()

        return {hour,minute,second}
    }
}

</script>

<template>
    <div class="flex">
        <div class="flex">
            <p v-if="hour < 10">0</p>
            <p>{{hour}}</p>
        </div>
        
        <p>:</p>
        <div class="flex">
            <p v-if="minute < 10">0</p>
            <p>{{minute}}</p>
        </div>
        <p>:</p>
        <div class="flex">
            <p v-if="second < 10">0</p>
            <p>{{second}}</p>
        </div>
    </div>
</template>
