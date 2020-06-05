<template>
    <div>
        <div class="demo" :class="myClass"
            @click="HandleClick"
            >
            click me to toggle color by @click
        </div>

        <div id="test1" class="demo" :class="myClass">
            click me to toggle color by jquery
        </div>

        <div id="test2" class="demo" :class="myClass">
            click me to toggle color by eventlistener
        </div>
    </div>
</template>

<script>
    // 使用3種方式來實現事件的處理
    // 1. @click
    // 2. jquery on click
    // 3. addEventListener

    import $ from 'jquery'
    
    export default {
        name: "VOn",
        data(){
            return {
                isToggle : false
            }
        },
        computed:{
            myClass:{
                get(){
                    return this.isToggle ? ["change"] : []
                }
            }
        },
        methods:{
            HandleClick(){
                this.isToggle = !this.isToggle
            }
        },
        mounted(){
            // 用jquery監聽事件
            $("#test1").on("click", this.HandleClick)

            // 用js原生方式監聽事件
            document.getElementById("test2").addEventListener("click", this.HandleClick)
        },
        beforeDestroy(){
            document.getElementById("test2").removeEventListener(this.HandleClick)
            // 卸載組件前，要記得手動移除event listener，不然會一直留在網頁上變僵屍
        }
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
