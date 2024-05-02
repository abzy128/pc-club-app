<template>
    <div class="center">
        <h1>Company's name</h1>
        <div class="form">
            <form>
                <AnyInput ph="enter login" v-model="login"/>
                <AnyInput ph="enter password" tp="password" v-model="password"/>
                <AnyButton>Submit</AnyButton>
            </form>
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