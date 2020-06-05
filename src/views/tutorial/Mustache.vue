<template>
    <div>
        <h3>{{ImVariable1}}</h3>
        <h3>{{ImVariable2}}</h3>
        <h3>{{ImVariable3}}</h3>
    </div>
</template>

<script>
    // Mustache 括號語法

    export default {
        name: "Mustache",
        data(){
            return {
                ImVariable1 : "Hello World",
                ImVariable2 : "Hello",
                ImVariable3 : "World",
            }
        },
    }
</script>
