<template>
    <div>
        <h3>{{text}}</h3>
        <DemoTwoWayDataBinding v-model="text" />
    </div>
</template>

<script>
    // custom two-way data binding

    import DemoTwoWayDataBinding from '@/components/DemoTwoWayDataBinding.vue'

    export default {
        name: "TwoWayDataBinding",
        components:{
            DemoTwoWayDataBinding
        },
        data(){
            return {
                text: "hello world"
            }
        },
    }
</script>
