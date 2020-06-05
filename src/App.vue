<template>
    <div id="app">
        <Sidebar class="sidebar"/>
        <div class="main-contnet">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/helper/Sidebar.vue'
    export default {
        name: 'home',
        components: {
            Sidebar
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        display: flex;
        .sidebar{
            width: 350px;
            height: 100%;
            background: #90b7df;
        }

        .main-contnet{
            width: 100%;
        }
    }
</style>
