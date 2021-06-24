import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        ifshow: true,//初始值显示隐藏\
        pathName: "",//当前菜单栏路径
        titleName: "客户级别画像",
        indexState: "",//本人保障详细查询
        baodanData: {}//保障保单最终详情数据
    },
    mutations: {
        uploadifsow(state, value) {
            state.ifshow = value
        },
        savePath(state, pathName) {
            state.pathName = pathName
            state.ifshow = pathName == "/home" || pathName == "/home/familyCustomerPortrait" ? true : false
            if (pathName == "/home") {
                state.titleName = "客户级别画像"
            } else if (pathName == "/home/familyCustomerPortrait") {
                state.titleName = "家庭级别画像"

            }
        },
        saveTitleName(state, titleName) {
            state.titleName = titleName
        },
        saveIndexState(state, indexState) {
            state.indexState = indexState
        },
        savebaodanData(state, baodanData) {
            state.baodanData = baodanData
        }
    }
})