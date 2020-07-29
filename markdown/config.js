import mergeDefault from '@gem-mine/cli-plugin-doc/docsify/defaults'
const Glaucus = require('@gem-mine/glaucus/dist/glaucus.common')
import '@gem-mine/glaucus/dist/glaucus.css'

// docsify配置
window.$docsify = mergeDefault({
  name: 'glaucus',
  loadSidebar: 'zh-cn/_sidebar.md',
  homepage: 'zh-cn/README.md',
})

window['gem-mine-glaucus'] = Glaucus