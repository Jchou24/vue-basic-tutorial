<template>
    <div>
        <p>Your input: {{text}}</p>
        <p>Your input to upper case: {{upperText}}</p>

        <input v-model="text" />
    </div>
</template>

<script>
    // 使用 Computed 設定reacive變數，並將user input的字串轉大寫
    
    export default {
        name: "Computed",
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
                    return this.text.toUpperCase()
                }
            }
        },
    }
</script>
