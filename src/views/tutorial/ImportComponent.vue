<template>
    <div>
        <DemoImport />
        <DemoImport></DemoImport>
    </div>
</template>

<script>
    // 重複使用組件
    // @ is an alias to /src
    import DemoImport from '@/components/DemoImport.vue'

    export default {
        name: "ImportComponent",
        components:{
            DemoImport
        },
    }
</script>
