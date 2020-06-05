<template>
    <div>
        <p>Your input: {{text}}</p>
        <p>Your input to upper case: {{upperText}}</p>

        <input v-model="text" />
    </div>
</template>

<script>
    // 在methods宣告轉大寫的function
    // 並使用 Computed 設定reacive變數，並將user input的字串轉大寫
    
    export default {
        name: "Methods",
        data(){
            return {
                text: "initial text",
                // upperText: "INITIAL TEXT"
                // Computed宣告upperText後，data不能宣告一樣的，反之亦然
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
        }
    }
</script>
