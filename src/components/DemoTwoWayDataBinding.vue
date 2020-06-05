<template>
    <div>
        <input v-model="data" @input="HandleInput" />
    </div>
</template>

<script>
    export default {
        name: "DemoTwoWayDataBinding",
        props:{
            value:{
                required: true,
                type: String,
            }
        },
        data(){
            return {
                data: this.value
            }
        },
        watch:{
            value(newValue){
                this.data = newValue
            }
        },
        methods:{
            HandleInput(){
                this.$emit("input", this.data)
            }
        },
    }
</script>
