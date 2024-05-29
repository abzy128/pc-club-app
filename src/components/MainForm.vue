<template>
    <div class="absolute top-0 right-0 mr-3">
        <div class="flex">
            <Icon class="mr-2" icon="material-symbols:account-circle" width="46px"/>
            <div>
                <p>{{ConfigStore.id}}</p>
                <p>{{ConfigStore.username}}</p>
            </div>
        </div>
        <Timer class="w-max mx-auto"/>
    </div>
    <div v-if="steam">
        <div class="h-screen grid grid-cols-4">
            <div v-for="game in SteamGameListStore.gameList" :key="game.id">
                <div>
                        <MainItem :app="game"/>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="grid grid-cols-4">
            <div v-for="tool in tools" :key="tool.id">
                <div>
                        <MainItem :app="tool"/>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import MainItem from "./main/MainItem.vue"
import {ref} from 'vue'
import { useNavStatusStore } from "../store/NavStatus"
import { storeToRefs } from 'pinia'
import { useConfigStore } from "../store/ConfigStore"
import {Icon} from '@iconify/vue'
import { useSteamGameListStore } from "../store/SteamGameList"
import Timer from './main/Timer.vue'

export default {
    components:{
        MainItem,
        Icon,
        Timer 
    },
    setup(){
        let tools = [
            {
                id: 4,
                banner: "https://cdn2.steamgriddb.com/grid/1974a767627527a2f88ea3f2818676d7.png",
                name: "Discord"
            },
            {
                id: 5,
                banner: "https://1000logos.net/wp-content/uploads/2017/08/Chrome-emblem.jpg",
                name: "Chrome",
                path: "c:/Users/heyoSSam/Desktop/shortcuts/Chrome.lnk"
            }
        ]
        
        let NavStatusStore = useNavStatusStore(), ConfigStore = useConfigStore(), SteamGameListStore = useSteamGameListStore();

        const {steam} = storeToRefs(NavStatusStore), {getGames} = SteamGameListStore;

        getGames()

        return {tools, steam, ConfigStore, SteamGameListStore}
    }
}
</script>
<style>
    
</style>