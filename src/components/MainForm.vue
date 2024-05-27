<template>
    <div v-if="steam">
        <div class="grid grid-cols-4">
            <div v-for="game in gameSteam" :key="game.id">
                <div>
                        <MainItem :app="game"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="riot">
        <div class="grid grid-cols-4">
            <div v-for="game in gameRiot" :key="game.id">
                <div>
                        <MainItem :app="game"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="epic">
        <div class="grid grid-cols-4">
            <div v-for="game in gameEpic" :key="game.id">
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

export default {
    components:{
        MainItem    
    },
    setup(){
        let gameSteam = [
            {   
                id: 1,
                link: "https://upload.wikimedia.org/wikipedia/ru/d/db/Counter-strike_2.jpg",
                name: "CS2"
            },
        ], gameRiot = [
            {   
                id: 2,
                link: "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg",
                name: "Valorant"
            },
        ], gameEpic = [
            {   
                id: 3,
                link: "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg",
                name: "Fortnite"
            },
        ], tools = [
            {
                id: 4,
                link: "https://cdn2.steamgriddb.com/grid/1974a767627527a2f88ea3f2818676d7.png",
                name: "Discord"
            },
            {
                id: 5,
                link: "https://1000logos.net/wp-content/uploads/2017/08/Chrome-emblem.jpg",
                name: "Chrome",
                path: "c:/Users/heyoSSam/Desktop/shortcuts/Chrome.lnk"
            }
        ]
        
        let NavStatusStore = useNavStatusStore();

        const {steam, riot, epic} = storeToRefs(NavStatusStore);

        return {gameSteam,gameRiot,gameEpic, tools, steam, riot, epic}
    }
}
</script>
<style>
    
</style>