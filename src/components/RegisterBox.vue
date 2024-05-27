<template>
    <div class="center">
        <h1 class="mb-10 text-6xl">Company name</h1>
        <div class="form">
            <form>
                <AnyInput class="mb-5" ph="enter your login" v-model="login"/>
                <AnyInput class="mb-5" ph="enter password" tp="password" v-model="password"/>
                <AnyInput class="mb-5" ph="repeat password" tp="password" v-model="password_r"/>
                <AnyButton @click.prevent="password == password_r ? createAccount() : errors.push({'code':'error', 'message':'Repeat the password correctly'});" type="submit" class="text-center">Proceed</AnyButton>
                <div v-if="errors.length">
                    <div v-for="error in errors" :key="error.code">

                        <p class="text-center text-red-600">{{error.message}}</p>
                    </div>
                    
                </div>
            </form>
        </div>
        <div class="mt-4">
            <RouterLink to="/" class="text-center brightness-50">
                <p class="underline">Have an account?</p>
            </RouterLink>
        </div>
    </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import { useRouter } from "vue-router";

export default {

    setup(){
        let login = ref(), password = ref(''), password_r = ref(''), errors = ref([]), response, default_link = 'https://abzy-server:5001/api/auth/register';

        const router:any = useRouter();

        async function createAccount(){
            let uri = default_link + `?Username=${login['value']}&Password=${password['value']}`;
            try {
                response = await fetch(uri, {
                method : 'POST',
            }).then(async (res) => {router.push('/login');return await res.json();}).catch((e) => {console.log(e); errors['value'].push({'code' : '409', 'message' : 'Already exists'});return e}); 

            } catch(err) {
                console.log('failed')
                return await err
            }
            
        }

        

        return {
            login,
            password,
            password_r,
            errors,
            createAccount
        }
    }
}
</script>
<style>

</style>