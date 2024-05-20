<template>
    <div v-if="steam">
        <div class="grid grid-cols-4">
            <div v-for="game in gameSteam" :key="game.id">
                <div>
                        <MainItem :link="game.link" :name="game.name"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="riot">
        <div class="grid grid-cols-4">
            <div v-for="game in gameRiot" :key="game.id">
                <div>
                        <MainItem :link="game.link" :name="game.name"/>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="grid grid-cols-4">
            <div v-for="game in gameEpic" :key="game.id">
                <div>
                        <MainItem :link="game.link" :name="game.name"/>
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
            {
                id: 1,
                link: "https://upload.wikimedia.org/wikipedia/ru/d/db/Counter-strike_2.jpg",
                name: "CS2"
            },
            {   
                id: 1,
                link: "https://upload.wikimedia.org/wikipedia/ru/d/db/Counter-strike_2.jpg",
                name: "CS2"
            }
        ], gameRiot = [
            {   
                id: 2,
                link: "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg",
                name: "Valorant"
            },
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
        ]
        
        let NavStatusStore = useNavStatusStore();

        const {steam, riot, epic} = storeToRefs(NavStatusStore);

        return {gameSteam,gameRiot,gameEpic, steam, riot, epic}
    }
}
</script>
<style>
    
</style>