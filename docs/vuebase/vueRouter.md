vue router

## Vue Router

### 使用场景

::: tip 传统开发模式

- www.xxx.com一index.html
- www.xxx.com/about 一about.html
- www.xxx.com/xxx一xxx.html

:::

::: tip 单页面(SPA)开发模式

- www.xxx.com一index.html
- www.xxx.com/about一index.html
- www.xxx.com/xxx - index.html

:::

::: tip Vue Router使用方式

1. 提供一个路由配置表,不同URL对应不同组件的配置
2. 初始化路由实例new VueRouter()
3. 挂载到Vue实例上
4. 提供一个路由占位 ,用来挂载URL匹配到的组件

:::