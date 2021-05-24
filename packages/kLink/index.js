import kLink from './src/index.vue'

// 提供 install 安装方法，供按需引入
kLink.install = function (Vue) {
    // 注册组件
    Vue.component(kLink.name, kLink)
}
// 暴露组件
export default kLink