@@ -1,8 +1,7 @@
“使用严格”

const  path   =  require （'path' ）
const  pkg    =  require （路径。解析（__dirname ， '../package.json' ））
const  year   =  new  Date （）。getFullYear （）
const  pkg  =  require （'../package.json' ）
const  year  =  new  Date （）。getFullYear （）

函数 getBanner （pluginFilename ） {
  返回 `/ *！
