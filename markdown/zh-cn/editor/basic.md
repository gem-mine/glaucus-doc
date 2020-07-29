# Basic
基础使用

```jsx
/* react */
<script>
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