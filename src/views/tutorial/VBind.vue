<template>
    <div class="demo-vbind-class" :class="dynamicClass">
        my color will change at {{timer}} seconds
    </div>
</template>

<script>
    // 當組件被掛載，5秒後動態更改組件的class
    // 5秒後，組件之class會多一個'change'，並改變顏色

    export default {
        name: "VBind",
        data(){
            return {
                timer: 5,
                dynamicClass: []
            }
        },
        mounted(){
            let that = this

            let interval = setInterval(function(){
                that.timer -= 1

                if(that.timer <= 0){
                    clearInterval(interval)
                    that.dynamicClass = ["change"]
                }
            }, 1000)
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .demo-vbind-class{
        margin: 5px auto;
        width: 200px;
        height: 200px;
        background: whitesmoke;
    }

    .demo-vbind-class.change{
        background: grey;
    }
</style>
