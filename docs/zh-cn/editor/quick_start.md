# 快速上手

## install
``` su
  yarn add @gem-mine/glaucus
```

## Usage
```jsx
import React from 'react'
import { GlaucusFactory } from '@gem-mine/glaucus'
import '@gem-mine/glaucus/dist/glaucus.css' // 注意，这里需要引入样式，或自行实现样式

export default function HomeIndex() {
  const glaucusFactory = new GlaucusFactory({ pluginConfig: 'base' })
  const Glaucus = glaucusFactory.getComponent()
  return (
    <Glaucus />
  )
}
```
