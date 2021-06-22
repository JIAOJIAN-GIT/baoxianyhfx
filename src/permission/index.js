// 处理路由拦截 导航守卫
import router from '../router'

// 全局前置守卫 
router.beforeEach(function (to, from, next) {
    // .startsWith  判断字符串是以什么开头
    if (to.path.startsWith('/home')) {
        let token = window.localStorage.getItem('user-token')
        if (token) {
            next()
        } else {
            // console.log(to.path, '路由有问题')
            // next('/login')
            next()

        }
    } else {
        next()
    }
})