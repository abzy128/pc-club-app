import {defineStore} from 'pinia';
import {ref} from 'vue';
import { useUserTokenStore } from './UserTokenStore';
import { useSteamGameListStore } from './SteamGameList';

export const useConfigStore = defineStore("ConfigStore", () => {
    let SteamID = ref(''), username = ref(''),id = ref(''), email = ref(''), phone = ref(''), response;

    let UserTokenStore = useUserTokenStore(), SteamGameList = useSteamGameListStore()

    let {getGames} = SteamGameList;

    async function getInfo(){
        
        try{
            response = await fetch('https://abzy-server:5001/api/user', {
                method: 'GET',
                headers: new Headers({
                    'Authorization' : 'Bearer ' + UserTokenStore.userToken
                })
            }).then(async (res) => {
                return await res.json()
            })
            id['value'] = response.id;
            username['value'] = response.username;
            email['value'] = response.email;
            phone['value'] = response.phoneNumber;
            SteamID['value'] = response.steamID;
        } catch(e){
            console.log(e)
        }
    }

    async function changeSteamID(id:string, mail:string, phoneNumber:string){
        try{
            response = await fetch(`https://abzy-server:5001/api/user?Email=${mail}&PhoneNumber=${phoneNumber}&SteamID=${id}`, {
                method: 'POST',
                headers: new Headers({
                    'Authorization' : 'Bearer ' + UserTokenStore.userToken
                })
            }).then(async (res) => {
                return await res.json()
            })
    
            SteamID['value'] = response.steamID;
            getGames();
            email['value'] = response.email;
            phone['value'] = response.phoneNumber;
            return true
        } catch(e){
            console.log(e)
            return false
        }
    }

    async function changePassword(password:string){
        try{
            response = await fetch(`https://abzy-server:5001/api/user/update-password?password=${password}`, {
                method: 'POST',
                headers: new Headers({
                    'Authorization' : 'Bearer ' + UserTokenStore.userToken
                })
            }).then(async (res) => {
                return await res
            })

            console.log(response)
            return true
        } catch(e){
            console.log(e)
            return false
        }

        return true
    }
    return {SteamID, username, id, phone, email, changeSteamID, getInfo, changePassword}
})