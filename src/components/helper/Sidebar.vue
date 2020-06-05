<template>
    <div class="sidebar">
        <div v-for="(setting, index) in settings"
            :key="index"
            :index="index"
            class="sidebar-element"
            >
            <router-link :to="`/${setting}`">{{index}}: {{setting}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data(){
            return {
                settings:[
                    "Home",
                    "Mustache",
                    "ImportComponent",
                    "ImportComponentWithSlot",
                    "VModel",
                    "Watch",
                    "Computed",
                    "Methods",
                    "Mounted",
                    "VBind",
                    "VOn",
                    "VIfElse",
                    "VFor",
                    "Props",
                    "Emit",
                    "TwoWayDataBinding",
                    "Store",
                ]
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .sidebar {
        text-align: left;
        padding: 5px;
        border-radius: 5px;

        a {
            font-weight: bold;
            color: #2c3e50;
            border-radius: 5px;
            
            &.router-link-exact-active {
                color: #90b7df;
                background: #2c3e50;
                width: 100%;
                display: block;
            }
        }

        .sidebar-element{
            height: 20px;
            padding: 5px;
            margin-left: 10px;
        }
    }
</style>
