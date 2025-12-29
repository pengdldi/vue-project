import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribue from '../views/DataBindingAttribue.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVIf from '../views/RenderingVIf.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import ComputedView from '../views/ComputedView.vue'
import WatchView2 from '../views/WatchView2.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent5.vue'
import ProvideInject from '../views/ProvideInject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: DataBindingAttribue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  } ,
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindingstyle2',
    name: 'DataBindingStyle2',
    component: DataBindingStyle2
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/computedview',
    name: 'ComputedView',
    component: ComputedView
  },
  {
    path: '/watchview2',
    name: 'WatchView2',
    component: WatchView2
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedComponent
  },
  {
    path: '/parent',
    name: 'Parent',
    component: ParentComponent
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
