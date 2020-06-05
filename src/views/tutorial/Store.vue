<template>
    <div>
        <ALevelOne />
        <BLevelOne />
    </div>
</template>

<script>
    // 在深度巢狀組件中，用vuex來傳遞資料
    import ALevelOne from '@/components/deepNestedComponents/ALevelOne.vue'
    import BLevelOne from '@/components/deepNestedComponents/BLevelOne.vue'
    
    export default {
        name: "Store",
        components:{
            ALevelOne,
            BLevelOne
        },
    }
</script>

