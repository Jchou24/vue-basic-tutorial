<template>
    <div class="imported-component">
        <p>Import me please</p>
        <slot>You can cover me</slot>
    </div>
</template>

<script>
    export default {
        name: "DemoImportSlot",
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .imported-component{
        background: whitesmoke;
    }
</style>
