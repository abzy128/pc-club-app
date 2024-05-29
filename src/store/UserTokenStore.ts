import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useUserTokenStore = defineStore("UserTokenStore", () => {
    let userToken = ref(''), response:any;

    async function newUserToken(login:string, password:string){
        try{
            response = await fetch(`https://abzy-server:5001/api/auth/login?Username=${login}&Password=${password}`, {
                method: 'POST'
            }).then(async (res) => {return await res}).catch((e) => {return false})
        } catch(e){
            console.log(e)
            return false
        }

        if(response.status == 200)
            userToken['value'] = await response.text()
        else{
            return false
        }

        return userToken['value']
    }

    return {userToken, newUserToken}
})