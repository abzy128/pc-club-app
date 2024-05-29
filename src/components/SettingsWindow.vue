<script lang="ts" setup>
import {Icon} from '@iconify/vue';
import {ref} from 'vue';
import { useNavStatusStore } from '../store/NavStatus';
import { useConfigStore } from '../store/ConfigStore';
import { storeToRefs } from 'pinia';

let NavStatusStore = useNavStatusStore(), ConfigStore = useConfigStore(), error_status = ref(false);

let id = ref(''), mail = ref(''), phoneNumber = ref(''), password = ref(''), {SteamID, email, phone} = storeToRefs(ConfigStore)

let {actSettings} = NavStatusStore, {changeSteamID, changePassword} = ConfigStore;

</script>

<template>
    <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 border-solid border-2 border-whitep p-10">
        <div class="absolute top-0 right-0 m-2">
            <Icon icon="material-symbols:cancel-outline" width="24px" @click="actSettings"/>
        </div>
        <p class="text-white text-3xl">Settings</p>
        <div>
            <form>
                <div class="flex my-2">
                    <p class="mr-3">SteamID : </p>
                    <AnyInput v-model="id" :ph="SteamID"/>
                </div>

                <div class="flex my-2">
                    <p class="mr-3">Phone Number : </p>
                    <AnyInput v-model="phoneNumber" :ph="phone"/>
                </div>

                <div class="flex my-2">
                    <p class="mr-3">Email : </p>
                    <AnyInput v-model="mail" :ph="email"/>
                </div>
        
                <div class="text-center mt-1">
                    <AnyButton @click.prevent="async() => {await changeSteamID(id, mail, phoneNumber) ? actSettings() : error_status = true}" type="submit">Save</AnyButton>
                </div> 
                
                <div v-if="error_status">
                    <p class="text-red-600 text-center">Error in saving, try again</p>
                </div>
            </form>
        </div>

        <hr class="my-3">

        <div>
            <p class="text-xl">Change Password</p>

            <form>
                <div class="flex my-2">
                    <p class="mr-3">New password : </p>
                    <AnyInput :tp="'password'" v-model="password" :ph="'******'"/>
                </div>

                <div class="text-center mt-1">
                    <AnyButton @click.prevent="async() => {await changePassword(password) ? actSettings() : error_status = true}" type="submit">Save</AnyButton>
                </div> 
                
                <div v-if="error_status">
                    <p class="text-red-600 text-center">Error in saving, try again</p>
                </div>
            </form>
        </div>
    </div>
</template>
