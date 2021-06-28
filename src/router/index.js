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
          component: () => import('../views/CustomerPortrait'),
          children: [
            //级别
            {
              path: '',
              component: () => import('../components/CustomerPortrait_item/CP_level.vue')
            },
            //年龄
            {
              path: 'age',
              component: () => import('../components/CustomerPortrait_item/CP_age.vue')
            },
            //性别
            {
              path: 'sex',
              component: () => import('../components/CustomerPortrait_item/CP_sex.vue')
            },
            //保单
            {
              path: 'Policy',
              component: () => import('../components/CustomerPortrait_item/CP_Policy.vue')
            },
            //保费
            {
              path: 'premium',
              component: () => import('../components/CustomerPortrait_item/CP_premium.vue')
            },
            //保费总额
            {
              path: 'total',
              component: () => import('../components/CustomerPortrait_item/CP_total.vue')
            },
            //偏好
            {
              path: 'preference',
              component: () => import('../components/CustomerPortrait_item/CP_preference.vue')
            },
            //服务状态
            {
              path: 'service',
              component: () => import('../components/CustomerPortrait_item/CP_service.vue')
            },
          ]
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
          component: () => import('../views/familyCustomerPortrait'),
          children: [
            //级别
            {
              path: '',
              component: () => import('../components/familyCustomerPortrait_item/CP_level.vue')
            },
            //类别
            {
              path: 'category',
              component: () => import('../components/familyCustomerPortrait_item/CP_category.vue')
            },
            //人口
            {
              path: 'population',
              component: () => import('../components/familyCustomerPortrait_item/CP_population.vue')
            },
            //保单
            {
              path: 'Policy',
              component: () => import('../components/familyCustomerPortrait_item/CP_Policy.vue')
            },
            //主险保费
            {
              path: 'premium',
              component: () => import('../components/familyCustomerPortrait_item/CP_premium.vue')
            },
            //主险保费总额
            {
              path: 'total',
              component: () => import('../components/familyCustomerPortrait_item/CP_total.vue')
            },
            //偏好
            {
              path: 'preference',
              component: () => import('../components/familyCustomerPortrait_item/CP_preference.vue')
            },
            //服务状态
            {
              path: 'service',
              component: () => import('../components/familyCustomerPortrait_item/CP_service.vue')
            },
          ]
        },
        // 家庭查询
        {
          path: 'familyCustomerInquiryI',
          component: () => import('../views/familyCustomerInquiryI')
        },
        {
          path: 'InsuranceDetails',
          component: () => import('../components/InsuranceDetails/InsuranceDetails.vue')
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
          path: 'SAbaozhangxiangqing1',
          component: () => import('../components/SecurityAnalysis/SAbaozhangxiangqing1.vue')
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
        },
        // ------------------------产品中心
        //产品信息
        {
          path: 'ProductInformation',
          component: () => import('../views/ProductInformation')
        },
        //产品信息
        {
          path: 'ProductInformation_item',
          component: () => import('../components/ProductInformation')
        },
        //添加产品
        {
          path: 'addProduct',
          component: () => import('../views/ProductInformation/addProduct.vue')
        },
        //产品统计
        {
          path: 'Statistics',
          component: () => import('../views/ProductInformation/Statistics.vue')
        },
        //--------------------账号设置
        //产品统计
        {
          path: 'accountNumber',
          component: () => import('../views/accountNumber')
        },
        //产品统计
        {
          path: 'addaccountNumber',
          name: "addaccountNumber",
          component: () => import('../views/accountNumber/addaccountNumber.vue')
        },
      ]
    }
  ]
})
