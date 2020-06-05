<template>
    <div>
        <p>Your input: {{text}}</p>
        <p>Your input to upper case: {{upperText}}</p>

        <input v-model="text" />
    </div>
</template>

<script>
    // 將text的初始化動作改在component被mounted後再進行
    // 在methods宣告轉大寫的function
    // 並使用 Computed 設定reacive變數，並將user input的字串轉大寫
    
    export default {
        name: "Mounted",
        data(){
            return {
                text: "",
            }
        },
        computed:{
            upperText:{
                get(){
                    return this.toUpper(this.text)
                }
            }
        },
        methods:{
            toUpper(string){
                return string.toUpperCase()
            }
        },
        mounted(){
            this.text = "initial text"
        }
    }
</script>
