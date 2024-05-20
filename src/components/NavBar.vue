<template>
    <div class="flex flex-col">
        <NavBarItem @click="actSteam" class="mb-7" link="mdi:steam" text="Steam"/>
        <NavBarItem @click="actRiot" class="mb-7" link="mdi:gamepad-round" text="Riot Games"/>
        <NavBarItem @click="actEpic" class="mb-7" link="bi:explicit-fill" text="Epic Games"/>
        <NavBarItem class="mb-7" link="mdi:account-settings-variant" text="Settings"/>
    </div>
</template>
<script>
import NavBarItem from './navbar/NavBarItem.vue'
import {Icon} from '@iconify/vue'
import {ref} from 'vue'
import { useNavStatusStore } from "../store/NavStatus"
import { storeToRefs } from 'pinia'

export default {
    components:{
        NavBarItem,
        Icon
    },

    setup(){
        let NavStatusStore = useNavStatusStore();

        const {steam, riot, epic} = storeToRefs(NavStatusStore);

        const {actSteam, actRiot, actEpic} = NavStatusStore;

        return {steam,riot,epic,actSteam, actRiot, actEpic}

    }
}
</script>
<style>
    
</style>