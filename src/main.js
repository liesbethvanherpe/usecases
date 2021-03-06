// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from 'components/app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/:list_usecases', // display the UC bases on the key of usecases.json
      component: App,
      props: true // to see in the component as props
    },
    { path: '/:list_usecases/smmodels/:model_name', // models for singlecellmodeling
      component: function (resolve) {
        require(['components/singlecellmodeling/model-container.vue'], resolve)
      },
      props: true,
      name: 'singlecellmodeling_models'
    },
    { path: '/:list_usecases/form/:uc_name', // form to search / crate collabs
      component: function (resolve) {
        require(['components/collab-form.vue'], resolve)
      },
      props: true,
      name: 'uc_form'
    },
    { path: '/:list_usecases/smmodels/:model_name/form/:folder_name', // form to search / crate collabs
      component: function (resolve) {
        require(['components/collab-form-replacing.vue'], resolve)
      },
      props: true,
      name: 'sm_replacing_form'
    },
    { path: '/:list_usecases/cbmodels/:model_name', // circuit building models
      component: function (resolve) {
        require(['components/circuitbuilding/model-container.vue'], resolve)
      },
      props: true,
      name: 'cb_models'
    },
    { path: '/:list_usecases/cbmodels/:model_name/form/:uc_name', // form for the circuitbuilding models
      component: function (resolve) {
        require(['components/collab-form.vue'], resolve)
      },
      props: true,
      name: 'cb_form'
    }
  ],
  base: '/usecases/',
  scrollBehavior (to, from, savedPosition) {
    // to scroll to the top every change of route
    return { x: 0, y: 0 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
