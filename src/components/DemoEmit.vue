<template>
    <div>
        <h3>{{text}}</h3>
        <button @click="HandleClick">click me</button>
    </div>
</template>

<script>
    export default {
        name: "DemoEmit",
        props:{
            text:{
                type: String,
                default: () => "Hello"
            }
        },
        methods:{
            HandleClick(event){
                this.$emit("CustomEvent", event)
            }
        }
    }
</script>

