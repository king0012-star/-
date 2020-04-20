/ *！
 *脚本来构建我们的插件以单独使用它们。
 *版权2020 The Bootstrap Authors
 *版权所有2020 Twitter，Inc.
 *根据MIT（https://github.com/twbs/bootstrap/blob/master/LICENSE）许可
 * /

“使用严格”

const  path  =  require （'path' ）
const  rollup  =  require （'rollup' ）
const  babel  =  require （'rollup-plugin-babel' ）
const  banner  =  require （'./banner.js' ）

const  插件 =  [
  通天塔（{
    //只翻译我们的源代码
    exclude：'node_modules / **' ，
    //仅包含必需的助手
    externalHelpersWhitelist：[
      'createClass' ，
      'createSuper' ，
      'defineProperties' ，
      'defineProperty' ，
      'getPrototypeOf' ，
      'inheritsLoose' ，
      'objectSpread2'
    ]
  } ）
]
const  bsPlugins  =  {
  数据：路径。解析（__dirname ， '../js/src/dom/data.js' ），
  EventHandler：路径。解析（__dirname ， '../js/src/dom/event-handler.js' ），
  机械手：路径。解析（__dirname ， '../js/src/dom/manipulator.js' ），
  Polyfill：路径。解析（__dirname ， '../js/src/dom/polyfill.js' ），
  SelectorEngine：路径。解析（__dirname ， '../js/src/dom/selector-engine.js' ），
  警报：路径。解析（__dirname ， '../js/src/alert.js' ），
  按钮：路径。解析（__dirname ， '../js/src/button.js' ），
  轮播：路径。解析（__dirname ， '../js/src/carousel.js' ），
  崩溃：路径。解析（__dirname ， '../js/src/collapse.js' ），
  下拉菜单：路径。解析（__dirname ， '../js/src/dropdown.js' ），
  模态：路径。解析（__dirname ， '../js/src/modal.js' ），
  Popover：路径。解析（__dirname ， '../js/src/popover.js' ），
  ScrollSpy：路径。解析（__dirname ， '../js/src/scrollspy.js' ），
  Tab：路径。解析（__dirname ， '../js/src/tab.js' ），
  吐司：路径。解析（__dirname ， '../js/src/toast.js' ），
  工具提示：路径。解析（__dirname ， '../js/src/tooltip.js' ）
}
const  rootPath  =  path 。解析（__dirname ， '../js/dist/' ）

const  defaultPluginConfig  =  {
  外部：[
    bsPlugins 。数据，
    bsPlugins 。事件处理程序，
    bsPlugins 。选择引擎
  ] ，
  全球：{
    [ bsPlugins 。数据]：“数据” ，
    [ bsPlugins 。[EventHandler ]：“ EventHandler” ，
    [ bsPlugins 。SelectorEngine ]：'SelectorEngine'
  }
}

函数 getConfigByPluginKey （pluginKey ） {
  如果 （
    pluginKey  ===  '数据'  ||
    pluginKey  ===  '操纵器'  ||
    pluginKey  ===  'EventHandler'  ||
    pluginKey  ===  '  填充' ||
    pluginKey  ===  'SelectorEngine'  ||
    pluginKey  ===  '  实用程序' ||
    pluginKey  ===  '消毒剂'
  ） {
    返回 {
      外部：[ bsPlugins 。Polyfill ] ，
      全球：{
        [ bsPlugins 。[Polyfill ]：“ Polyfill”
      }
    }
  }

  if  （pluginKey  ===  'Alert'  ||  pluginKey  ===  'Tab' ） {
    返回 defaultPluginConfig
  }

  如果 （
    pluginKey  ===  '按钮'  ||
    pluginKey  ===  '轮播'  ||
    pluginKey  ===  '折叠'  ||
    pluginKey  ===  '模态'  ||
    pluginKey  ===  'ScrollSpy'
  ） {
    const  config  =  对象。分配（defaultPluginConfig ）
    配置。外在的。推（bsPlugins 。机械手）
    配置。全局[ bsPlugins 。机械手]  =  '机械手'
    返回 配置
  }

  if  （pluginKey  ===  'Dropdown'  ||  pluginKey  ===  'Tooltip' ） {
    const  config  =  对象。分配（defaultPluginConfig ）
    配置。外在的。推送（bsPlugins 。机械手， 'popper.js' ）
    配置。全局[ bsPlugins 。机械手]  =  '机械手'
    配置。globals [ 'popper.js' ]  =  'Popper'
    返回 配置
  }

  如果 （pluginKey  ===  'Popover' ） {
    返回 {
      外部：[
        bsPlugins 。数据，
        bsPlugins 。SelectorEngine ，
        bsPlugins 。工具提示
      ] ，
      全球：{
        [ bsPlugins 。数据]：“数据” ，
        [ bsPlugins 。SelectorEngine ]：'SelectorEngine' ，
        [ bsPlugins 。工具提示]：“工具提示”
      }
    }
  }

  如果 （pluginKey  ===  'Toast' ） {
    返回 {
      外部：[
        bsPlugins 。数据，
        bsPlugins 。事件处理程序，
        bsPlugins 。机械手
      ] ，
      全球：{
        [ bsPlugins 。数据]：“数据” ，
        [ bsPlugins 。[EventHandler ]：“ EventHandler” ，
        [ bsPlugins 。[机械手]：“机械手”
      }
    }
  }
}

const  utilObjects  =  [
  '的Util' ，
  “消毒剂”
]

const  domObjects  =  [
  “数据” ，
  'EventHandler' ，
  '机械手' ，
  “填充” ，
  'SelectorEngine'
]

功能 构建（插件） {
  控制台。日志（`Building $ { plugin } plugin ...` ）

  const  { external ， globals }  =  getConfigByPluginKey （插件）
  const  pluginFilename  =  路径。基本名称（bsPlugins [ 插件] ）
  让 pluginPath  =  ROOTPATH

  如果 （utilObjects 。包括（插件）） {
    pluginPath  =  ` $ { ROOTPATH } / UTIL /`
  }

  如果 （domObjects 。包括（插件）） {
    pluginPath  =  ` $ { ROOTPATH } / DOM /`
  }

  汇总。汇总（{
    输入：bsPlugins [ 插件] ，
    插件，
    外部
  } ）。然后（bundle  =>  {
    捆绑包。写（{
      横幅：横幅（pluginFilename ），
      格式：“ umd” ，
      名称：插件，
      sourcemap：true ，
      全局，
      文件：路径。解析（__dirname ， ` $ { pluginPath } / $ { pluginFilename } ` ）
    } ）
      。然后（（） =>  控制台。登录（`大厦$ { 插件}插件...完成！` ））
      。捕捉（误差 =>  控制台。误差（` $ { 插件}：$ { 错误} ` ））
  } ）
}

对象。键（bsPlugins ）
  。forEach （插件 =>  build （插件））
