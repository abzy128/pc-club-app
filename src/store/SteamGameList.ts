import {defineStore} from 'pinia';
import {ref} from 'vue';
import { useUserTokenStore } from './UserTokenStore';

export const useSteamGameListStore = defineStore("SteamGameListStore", () => {
    let gameList = ref([]), response;

    let UserTokenStore = useUserTokenStore()

    async function getGames(){
        try{
            response = await fetch('https://abzy-server:5001/api/steam/game-list', {
                method: 'GET',
                headers: new Headers({
                    'Authorization' : 'Bearer ' + UserTokenStore.userToken
                })
            }).then(async (res) => {return await res.json()}).catch((e) => {return false})

            gameList['value'] = await response.games.slice(0, 8)
        } catch(e){
            console.log(e)
            return false
        } 
    }
    return {gameList, getGames}
})