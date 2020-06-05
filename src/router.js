import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            alias: "/Home",
            name: 'home',
            component: Home
        },{
            path: '/Mustache',
            name: 'Mustache',
            component: () => import('./views/tutorial/Mustache.vue')
        },{
            path: '/ImportComponent',
            name: 'ImportComponent',
            component: () => import('./views/tutorial/ImportComponent.vue')
        },{
            path: '/ImportComponentWithSlot',
            name: 'ImportComponentWithSlot',
            component: () => import('./views/tutorial/ImportComponentWithSlot.vue')
        },{
            path: '/VModel',
            name: 'VModel',
            component: () => import('./views/tutorial/VModel.vue')
        },{
            path: '/Watch',
            name: 'Watch',
            component: () => import('./views/tutorial/Watch.vue')
        },{
            path: '/Computed',
            name: 'Computed',
            component: () => import('./views/tutorial/Computed.vue')
        },{
            path: '/Methods',
            name: 'Methods',
            component: () => import('./views/tutorial/Methods.vue')
        },{
            path: '/Mounted',
            name: 'Mounted',
            component: () => import('./views/tutorial/Mounted.vue')
        },{
            path: '/VBind',
            name: 'VBind',
            component: () => import('./views/tutorial/VBind.vue')
        },{
            path: '/VOn',
            name: 'VOn',
            component: () => import('./views/tutorial/VOn.vue')
        },{
            path: '/VIfElse',
            name: 'VIfElse',
            component: () => import('./views/tutorial/VIfElse.vue')
        },{
            path: '/VFor',
            name: 'VFor',
            component: () => import('./views/tutorial/VFor.vue')
        },{
            path: '/Props',
            name: 'Props',
            component: () => import('./views/tutorial/Props.vue')
        },{
            path: '/Emit',
            name: 'Emit',
            component: () => import('./views/tutorial/Emit.vue')
        },{
            path: '/TwoWayDataBinding',
            name: 'TwoWayDataBinding',
            component: () => import('./views/tutorial/TwoWayDataBinding.vue')
        },{
            path: '/Store',
            name: 'Store',
            component: () => import('./views/tutorial/Store.vue')
        }
    ]
})
