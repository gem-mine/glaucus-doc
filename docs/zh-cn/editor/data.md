# Data
数据持久化处理

```jsx
/* react */
<script>
const LS_KEY = '_glausucData'
const { GlaucusFactory } = window['gem-mine-glaucus']
const glaucusFactory = new GlaucusFactory({ pluginConfig: 'full' })
const Glaucus = glaucusFactory.getComponent()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    const localData = localStorage.getItem(LS_KEY)
    this.defaultValue = localData ? JSON.parse(localData) : null
  }

  handleChange = (value) => {
    localStorage.setItem(LS_KEY, JSON.stringify(value))
  }

  render() {
    return (
      <Glaucus defaultValue={this.defaultValue} onChange={this.handleChange}/>
    )
  }
}
</script>
```