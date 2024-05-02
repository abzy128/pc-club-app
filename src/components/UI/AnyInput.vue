<template>
    <div>
        <input 
        :type="tp"
        :placeholder="ph"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" 
        class=""
        >
    </div>
</template>
<script>
export default {
    name : 'AnyInput',

    props: {
        ph: String,
        tp: String,
        modelValue: String
    },
}
</script>
<style>
input{
    border: 1px solid black;
    outline: none;
    padding: 5px;
    background-color: black;
    color: #f5eded;
    margin: 5px 0;
    border-radius: 5px;
    transition: 0.5s;
}

input:focus{
    box-shadow: 2px 2px 10px 3px #f40909;
}
    
</style>