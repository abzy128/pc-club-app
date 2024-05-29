<template>
    <div class="flex flex-col">
        <NavBarItem @click="actSteam" class="mb-7" link="mdi:steam" text="Steam"/>
        <NavBarItem @click="actTools" class="mb-7" link="material-symbols:tools-wrench-rounded" text="Tools"/>
        <NavBarItem @click="actSettings" class="mb-7" link="mdi:account-settings-variant" text="Settings"/>
        <NavBarItem @click="UserTokenStore.userToken = ''; this.$router.push('/login')" class="mb-7" link="material-symbols:exit-to-app-rounded" text="LogOut"/>
    </div>
</template>
<script>
import NavBarItem from './navbar/NavBarItem.vue'
import {Icon} from '@iconify/vue'
import { useNavStatusStore } from "../store/NavStatus"
import { storeToRefs } from 'pinia'
import { useUserTokenStore } from '../store/UserTokenStore'
import { useConfigStore } from '../store/ConfigStore'

export default {
    components:{
        NavBarItem,
        Icon
    },

    setup(){
        let NavStatusStore = useNavStatusStore(), UserTokenStore = useUserTokenStore(), ConfigStore = useConfigStore();

        const {steam} = storeToRefs(NavStatusStore);

        const {actSteam, actTools, actSettings} = NavStatusStore, {getInfo} = ConfigStore;

        getInfo()

        return {steam, actSteam, actTools, actSettings, UserTokenStore}

    }
}
</script>
<style>
    
</style>