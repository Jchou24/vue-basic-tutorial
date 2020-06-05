<template>
    <div class="demo2">
        <p>I am ALevelTwo</p>
        <input v-model="text" />
    </div>
</template>

<script>
    export default {
        name: "ALevelTwo",
        data(){
            return {
                text: "aaa"
            }
        },
        watch:{
            text(newValue){
                this.$store.commit("UpdateText", newValue)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo2{
        background: #a9a9a9;
    }
</style>
