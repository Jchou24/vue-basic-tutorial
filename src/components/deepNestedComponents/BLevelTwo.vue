<template>
    <div class="demo2">
        <p>I am BLevelTwo</p>
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "BLevelTwo",
        computed:{
            text:{
                get(){
                    return this.$store.state.text
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo2{
        background: #527096;
    }
</style>
