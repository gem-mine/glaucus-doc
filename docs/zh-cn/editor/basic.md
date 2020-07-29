# Basic
基础使用

```jsx
/* react */
<script>
// 需要导入 css 或自行实现样式
// import '@gem-mine/glaucus/dist/glaucus.css'

const { GlaucusFactory } = window['gem-mine-glaucus']
const glaucusFactory = new GlaucusFactory({ pluginConfig: 'base' })
const Glaucus = glaucusFactory.getComponent()

export default class App extends React.Component {
  render() {
    return (
      <Glaucus placeholder="please enter"/>
    )
  }
}
</script>
```