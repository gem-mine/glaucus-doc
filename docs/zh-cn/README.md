## gem-mine-glaucus
基于 [slate](https://github.com/ianstormtaylor/slate) 自研的新一代富文本编辑器，目前仍在 `alpha` 阶段。

## API
### GlaucusFactory
富文本编辑器工厂函数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pluginConfig | 插件参数，指定插件模式 | `base` \| `full` |

### GlaucusFactory.slatePluginManager
插件管理器

### PluginConstrucor
插件构造器，包含以下属性

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| name | 插件名称 | string |
| toolBarGroupIndex | 在 toolbar 中的分组 | number |
| toolbarItem | 生成 toolbarItem 的函数 | (toolbarItemProps) => JSX.Element |
| editor | 编辑器实例 | SlateEditor |
| editorHooks | 编辑器钩子 | IEditorHooks |
| reactEventHooks | react 事件处理钩子 | { onClick, onKeyDown, ... } |
| renderLeaf | leaf 渲染函数 | (renderLeafProps) => any |
| renderElement | element 渲染函数 | (renderElementProps) => any |

#### GlaucusFactory.slatePluginManager.add
添加插件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pluginName | 插件名称 | string | - |
| pluginClass | 插件构造器 | PluginConstrucor | - |
| pluginOptions | 插件参数 | any | - |

#### GlaucusFactory.slatePluginManager.tap
修改插件参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pluginName | 插件名称 | string | - |
| optionModifier | 要修改的插件参数 | any | - |

#### GlaucusFactory.slatePluginManager.before
在某个插件前添加插件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| beforePluginName | 后一个插件名称 | string | - |
| pluginName | 插件名称 | string | - |
| pluginClass | 插件构造器 | PluginConstrucor | - |
| pluginOptions | 插件参数 | any | - |

#### GlaucusFactory.slatePluginManager.after
在某个插件后添加插件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterPluginName | 前一个插件名称 | string | - |
| pluginName | 插件名称 | string | - |
| pluginClass | 插件构造器 | PluginConstrucor | - |
| pluginOptions | 插件参数 | any | - |

#### GlaucusFactory.slatePluginManager.plugins
获取所有插件信息

### GlaucusFactory.getComponent
获取编辑器组件

### Glaucus
编辑器组件

``` js
  const Glaucus =  GlaucusFactory.getComponent()
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | 类名前缀 | string | `gem-mine-slate` |
| className | 类名 | string | - |
| placeholder | 提示文字 | string | - |
| defaultValue | 默认值 | object[] | - |
| onChange | 富文本发生变化时的回调 | (value) => void | - |
| reactEvent | 自定义事件 | { onClick, onKeyDown ... } | - |

### slate

### slateReact

### slateHistory

分别对应 slate/slate-react/slate-history 3 个包，用于调用 slate 相关函数

## 兼容性
Chrome63+
