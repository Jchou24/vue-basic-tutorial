<template>
    <div class="demo">
        <p>I am BLevelOne</p>
        <BLevelTwo />
    </div>
</template>

<script>
    import BLevelTwo from './BLevelTwo.vue'

    export default {
        name: "BLevelOne",
        components:{
            BLevelTwo
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo{
        background: #9bb4e0;
    }
</style>
