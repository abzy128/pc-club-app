<template>
    <div>
        <Icon :icon="link" width="48px"/>
        <p class="mt-1">{{text}}</p>
    </div>
</template>
<script>
import {Icon} from '@iconify/vue'
export default {
    components:{
        Icon
    },
    props:{
        link: String,
        text: String
    }
}
</script>
<style>
    
</style>