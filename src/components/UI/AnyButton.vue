<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name: 'AnyButton'
}
</script>
<style>
button{
    color: white;
    background-color: rgba(193, 191, 191, 0.635);
    border: 1px solid black;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    transition: 0.5s;
}

button:hover{

    box-shadow: 0px 0px 7px 3px #f40909;
}
</style>