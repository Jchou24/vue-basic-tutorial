<template>
    <div>
        <button @click="HandleClick" >Click me to toggle color</button>
        <div v-if="isToggle" class="demo"></div>
        <div v-else class="demo change"></div>
    </div>
</template>

<script>
    // v-if v-else 語法demo

    export default {
        name: "VIfElse",
        data(){
            return {
                isToggle: true
            }
        },
        methods:{
            HandleClick(){
                this.isToggle = !this.isToggle
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo{
        margin: 5px auto;
        width: 200px;
        height: 200px;
        background: whitesmoke;
    }

    .demo.change{
        background: grey;
    }
</style>
