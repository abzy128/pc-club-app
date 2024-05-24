<script lang="ts" setup>
import {Icon} from '@iconify/vue';
import {ref} from 'vue';
import { useNavStatusStore } from '../store/NavStatus';
import { useConfigStore } from '../store/ConfigStore';
import { storeToRefs } from 'pinia';

let NavStatusStore = useNavStatusStore(), ConfigStore = useConfigStore();

let {SteamID} = storeToRefs(ConfigStore)

let {actSettings} = NavStatusStore;

</script>

<template>
    <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 border-solid border-2 border-whitep p-10">
        <div class="absolute top-0 right-0 m-2">
            <Icon icon="material-symbols:cancel-outline" width="24px" @click="actSettings"/>
        </div>
        <p class="text-white text-3xl">Settings</p>
        <div>
            <div class="flex my-2">
                <p class="mr-3">Your SteamID : </p>
                <AnyInput v-model="SteamID"/>
            </div>
            <div class="flex my-2">
                <p class="mr-3">Your RiotID : </p>
                <AnyInput/>
            </div>
            <div class="flex my-2">
                <p class="mr-3">Your EpicStoreID : </p>
                <AnyInput/>
            </div>
            <div class="text-center mt-1">
                <AnyButton>Save</AnyButton>
            </div>
        </div>
    </div>
</template>
