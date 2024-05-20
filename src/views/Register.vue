<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="m-auto">
            <p>advertisement</p>
        </div>
        <div class="m-auto">
            <RegisterBox/>
        </div>
    </div>
</template>
<script>
import RegisterBox from '../components/RegisterBox.vue'

export default {
    components:{
        RegisterBox
    }
}
</script>
<style>
    
</style>