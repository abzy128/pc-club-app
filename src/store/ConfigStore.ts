import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useConfigStore = defineStore("ConfigStore", () => {
    let SteamID = ref('abc');

    return {SteamID}
})