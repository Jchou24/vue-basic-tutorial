<template>
    <div class="demo">
        <p>I am ALevelOne</p>
        <ALevelTwo />
    </div>
</template>

<script>
    import ALevelTwo from './ALevelTwo.vue'
    
    export default {
        name: "ALevelOne",
        components:{
            ALevelTwo
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo{
        background: whitesmoke;
    }
</style>
