<template>
    <div>
        <DemoEmit :text="text" @CustomEvent="HandleCustomEvent" />
        <p>{{event}}</p>
    </div>
</template>

<script>
    // 接收來自組件的自定義event
    
    import DemoEmit from '@/components/DemoEmit.vue'

    export default {
        name: "Emit",
        components:{
            DemoEmit
        },
        data(){
            return {
                text: "hello",
                event: ""
            }
        },
        methods:{
            HandleCustomEvent(event){
                this.text = "Hello World"
                this.event = event
                console.log(event)
            }
        }
    }
</script>

