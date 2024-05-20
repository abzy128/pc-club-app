<template>
    <div style="width:250px;height:400px" class=" mx-3">
        <img :src="link" width="250px" height="320px" :alt="name">
        <p class="text-center text-4xl mt-3">{{name}}</p>
    </div>
</template>
<script>
export default {
    props:{
        name: String,
        link: String
    }
}
</script>
<style>
    
</style>