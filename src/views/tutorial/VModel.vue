<template>
    <div>
        <p>Your input: {{text}}</p>

        <input v-model="text" />
    </div>
</template>

<script>
    // v-model綁定資料

    export default {
        name: "VModel",
        data(){
            return {
                text: "initial text"
            }
        },
    }
</script>
