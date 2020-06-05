<template>
    <div>
        <h3>{{number}}: {{text}}</h3>
    </div>
</template>

<script>
    export default {
        name: "DemoProps",
        props:{
            text:{
                type: String,
                default: () => "Hello"
            },
            number:{
                type: Number,
                required: true,
                default: () => "Hello"
            }
        },
    }
</script>

