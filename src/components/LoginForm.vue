<template>
    <div class="center">
        <h1 class="mb-10 text-6xl">Company name</h1>
        <div class="form">
            <form>
                <AnyInput class="mb-5" ph="enter login" v-model="login"/>
                <AnyInput class="mb-5" ph="enter password" tp="password" v-model="password"/>
                <AnyButton type="submit" class="text-center">Submit</AnyButton>
            </form>
        </div>
        <div>
            <RouterLink to="/register" class="mt-2 text-center brightness-50">
                <p class="underline">Create account</p>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {

    setup(){
        let login = ref(), password = ref()

        return {
            login,
            password
        }
    }
}
</script>
<style>

</style>