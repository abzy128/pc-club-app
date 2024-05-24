<template>
    <div>
        <button :type="type" class="p-3">
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name: 'AnyButton',

    props: {
        type: String
    }
}
</script>
<style>
button{
    color: white;
    background-color: rgba(193, 191, 191, 0.635);
    border: none;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    transition: 0.5s;
}

button:hover{

    box-shadow: 0px 0px 7px 3px #5512fb;
}
</style>