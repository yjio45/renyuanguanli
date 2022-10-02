import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally 注册了一个全局的svg组件
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 以上两行代码的含义就是将所有的svg目录下所有的 .svg后缀文件全都引入到项目中
