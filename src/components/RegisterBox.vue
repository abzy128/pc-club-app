<template>
    <div class="center">
        <h1 class="mb-10 text-6xl">Company name</h1>
        <div class="form">
            <form>
                <AnyInput class="mb-5" ph="enter your phone number" v-model="login"/>
                <AnyInput class="mb-5" ph="enter password" tp="password" v-model="password"/>
                <AnyInput class="mb-5" ph="repeat password" tp="password" v-model="password_r"/>
                <AnyButton class="text-center">Proceed</AnyButton>
            </form>
        </div>
        <div>
            <RouterLink to="/" class="mt-2 text-center brightness-50">
                <p class="underline">Have an account?</p>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {

    setup(){
        let login = ref(), password = ref(), password_r = ref()

        return {
            login,
            password,
            password_r
        }
    }
}
</script>
<style>

</style>