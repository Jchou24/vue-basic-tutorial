<template>
    <div>
        <DemoImportSlot />
        <DemoImportSlot>
            <p>The message is coverd by parent</p>
        </DemoImportSlot>
    </div>
</template>

<script>
    // 改寫組件部分內容
    // @ is an alias to /src
    import DemoImportSlot from '@/components/DemoImportSlot.vue'

    export default {
        name: "ImportComponentWithSlot",
        components:{
            DemoImportSlot
        },
    }
</script>
