import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        text: "hello"
    },
    mutations: {
        UpdateText(state, text){
            state.text = text
        }
    },
    actions: {

    }
})
