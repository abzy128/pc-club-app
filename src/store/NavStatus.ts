import {defineStore} from 'pinia';
import {ref} from 'vue'

export const useNavStatusStore = defineStore("NavStatusStore", () => {
    let steam = ref(false), settings = ref(false);

    function actSteam(){
        steam['value'] = true;
    }

    function actTools(){
        steam['value'] = false;
    }

    function actSettings(){
        settings['value'] = !settings['value'];
    }

    return {steam, settings, actSteam, actTools, actSettings}
})