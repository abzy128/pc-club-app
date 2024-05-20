<template>
    <div class="h-screen grid grid-cols-12">
        <div>
            <NavBar/>
        </div>
        <div class="col-span-11">
            <MainForm/>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import MainForm from '../components/MainForm.vue'
export default {
    components: {
        NavBar,
        MainForm
    }
}
</script>
<style>
    
</style>