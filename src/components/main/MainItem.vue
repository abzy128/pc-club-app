<template>
    <div @click="openApp(app.path)" style="width:250px;height:400px" class=" mx-3">
        <img :src="app.link" width="250px" height="320px" :alt="app.name">
        <p class="text-center text-4xl mt-3">{{app.name}}</p>
    </div>
</template>
<script lang="ts">
import path from 'path';
import exec from '../../renderer'

export default {
    props:{
        app: Object
    },

    setup(){
        function openApp(appPath: string){
            exec.chrome(appPath)
        }

        return {
            openApp,
        }
    }
}
</script>
<style>
    
</style>