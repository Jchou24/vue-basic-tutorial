<template>
    <div>
        <DemoProps :number="1" />
        <DemoProps :number="2" :text="text" />
    </div>
</template>

<script>
    // 使用props傳遞資訊給組件
    import DemoProps from '@/components/DemoProps.vue'

    export default {
        name: "Props",
        components:{
            DemoProps
        },
        data(){
            return {
                text: "hello world"
            }
        },
    }
</script>

