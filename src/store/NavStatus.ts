import {defineStore} from 'pinia';
import {ref} from 'vue'

export const useNavStatusStore = defineStore("NavStatusStore", () => {
    let steam = ref(false), riot = ref(true), epic = ref(false);

    function actSteam(){
        steam['value'] = true;
        riot['value'] = false;
        epic['value'] = false;
    }
    
    function actRiot(){
        steam['value'] = false;
        riot['value'] = true;
        epic['value'] = false;
    }

    function actEpic(){
        steam['value'] = false;
        riot['value'] = false;
        epic['value'] = true;
    }

    return {steam, riot, epic, actEpic, actRiot, actSteam}
})