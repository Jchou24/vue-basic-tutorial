<template>
    <div>        
        <div v-for="(setting, index) in elementSettings"
            :key="index"
            class="demo"
            :class="setting.classSetting"
        >{{index}}. {{setting.text}}</div>

    </div>
</template>

<script>
    // v-for 語法demo

    export default {
        name: "VFor",
        data(){
            return {
                elementSettings:[{
                        text: "hello",
                        classSetting: []
                    },{
                        text: "hello",
                        classSetting: ["change"]
                    },{
                        text: "world",
                        classSetting: []
                    }]
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
