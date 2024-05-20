<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="m-auto">
            <p>advertisement</p>
        </div>
        <div class="m-auto">
            <LoginForm/>
        </div>
    </div>
</template>
<script>
import LoginForm from '../components/LoginForm.vue'
export default {
    components:{
        LoginForm
    }
}
</script>
<style>

</style>