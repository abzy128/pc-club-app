<template>
    <div class="center">
        <h1 class="mb-10 text-6xl">Company name</h1>
        <div class="form">
            <form>
                <AnyInput class="mb-5" ph="enter login" v-model="login"/>
                <AnyInput class="mb-5" ph="enter password" tp="password" v-model="password"/>
                <AnyButton @click.prevent="async() => {await newUserToken(login, password) ? this.$router.push('/') : error_status = true}" type="submit" class="text-center">Submit</AnyButton>
            </form>
        </div>
        <div v-if="error_status">
            <p class="text-red-600 text-center mb-1">Login Failed</p>
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
import { useUserTokenStore } from '../store/UserTokenStore';

export default {

    setup(){
        let login = ref(), password = ref(), error_status = ref(false);

        let UserTokenStore = useUserTokenStore();

        const {newUserToken} = UserTokenStore;
        
        return {
            login,
            password,
            error_status,
            newUserToken,
        }
    }
}
</script>
<style>

</style>