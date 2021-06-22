import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/home/home_header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      component: Home,
      // 二级路由
      children: [
        // ------------------------客户分析
        {
          path: '',
          // 客户画像
          component: () => import('../views/CustomerPortrait')
        },
        // 客户查询
        {
          path: 'CustomerInquiryI',
          component: () => import('../views/CustomerInquiryI')
        },
        // 保障分析
        {
          path: 'SecurityAnalysis',
          component: () => import('../views/SecurityAnalysis')
        },
        // ------------------------家庭分析
        // 家庭画像
        {
          path: 'familyCustomerPortrait',
          component: () => import('../views/familyCustomerPortrait')
        },
        // 家庭查询
        {
          path: 'familyCustomerInquiryI',
          component: () => import('../views/familyCustomerInquiryI')
        },
        // 保障分析
        {
          path: 'familySecurityAnalysis',
          component: () => import('../views/familySecurityAnalysis')
        },
        {
          path: 'SAbaozhangxiangqing',
          component: () => import('../components/SecurityAnalysis/SAbaozhangxiangqing.vue')
        },
        {
          path: 'SAbaozhangxiangqing2',
          component: () => import('../components/SecurityAnalysis/SAbaozhangxiangqing2.vue')
        },
        // ------------------------导入上传
        {
          path: 'leadingIn',
          component: () => import('../views/leadingIn')
        },
        {
          path: 'leadingIn1',
          component: () => import('../views/leadingIn/leadingIn1.vue')
        },
        {
          path: 'leadingIn2',
          component: () => import('../views/leadingIn/leadingIn2.vue')
        }
      ]
    }
  ]
})
