<template>
    <div class="center">
        <h1 class="mb-10 text-6xl">Company name</h1>
        <div class="form">
            <form>
                <AnyInput class="mb-5" ph="enter your login" v-model="login"/>
                <AnyInput class="mb-5" ph="enter password" tp="password" v-model="password"/>
                <AnyInput class="mb-5" ph="repeat password" tp="password" v-model="password_r"/>
                <AnyButton @click.prevent="createAccount" type="submit" class="text-center">Proceed</AnyButton>
            </form>
        </div>
        <div class="mt-4">
            <RouterLink to="/" class="text-center brightness-50">
                <p class="underline">Have an account?</p>
            </RouterLink>
        </div>
    </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {

    setup(){
        let login = ref(), password = ref(), password_r = ref(), response;

        async function createAccount(data:{username: string, password : string }){
            response = await fetch('https://abzy-server:5001/api/auth/register', {
                method : 'POST',
                mode: "cors",
                body : JSON.stringify(data),
            });

            console.log(response)
            return await response.json();
        }

        return {
            login,
            password,
            password_r,
            createAccount
        }
    }
}
</script>
<style>

</style>