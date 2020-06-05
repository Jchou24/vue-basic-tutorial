<template>
    <div>
        <p>Your input: {{text}}</p>
        <p>Your input to upper case: {{upperText}}</p>

        <input v-model="text" />
    </div>
</template>

<script>
    // 使用 Watch 監聽變數，並將user input的字串轉大寫
    
    export default {
        name: "Watch",
        data(){
            return {
                text: "initial text",
                upperText: "INITIAL TEXT"
            }
        },
        watch:{
            text(newValue){
                this.upperText = newValue.toUpperCase()
            }
        }
    }
</script>
