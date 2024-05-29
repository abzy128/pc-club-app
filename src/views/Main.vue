<template>
    <div class="grid grid-cols-12" :class="{'opacity-5' : settings}">
        <div>
            <NavBar/>
        </div>
        <div class="col-span-11">
            <MainForm/>
        </div>
    </div>
    <div v-if="settings">
        <SettingsWindow/>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import SettingsWindow from '../components/SettingsWindow.vue';
import MainForm from '../components/MainForm.vue';
import { storeToRefs } from 'pinia';
import { useNavStatusStore } from '../store/NavStatus';

export default {
    components: {
        NavBar,
        MainForm,
        SettingsWindow
    },

    setup(){
    let NavStatusStore = useNavStatusStore();

    let {settings} = storeToRefs(NavStatusStore);


    return {settings}
}
}


</script>
<style>
    
</style>