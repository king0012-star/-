@@ -17,6 +17,8 @@ const fs = require（'fs'）
const  path  =  require （'path' ）
const  sh  =  require （'shelljs' ）

const  pkg  =  require （'../package.json' ）

SH 。配置。致命 =  真

const  configFile  =  path 。加入（__dirname ， '../_config.yml' ）
@@ -34,7 +36,7 @@ const文件= [
    configPropertyName：'js_hash'
  } ，
  {
    文件：' site / docs / 4.1 /assets/js/vendor/jquery-slim.min.js '，
    文件：` site / docs / $ { pkg 。version_short } /assets/js/vendor/jquery-slim.min.js `，
    configPropertyName：'jquery_hash'
  } ，
  {
 6  js / tests / karma.conf.js 
@@ -1,14 +1,16 @@
/ * eslint-env节点* /
/ * eslint no-process-env：0 * /

const  ip  =  require （'ip' ）
const  pkg  =  require （'../../package.json' ）
const  {
  浏览器，
  浏览器键
}  =  require （'./browsers' ）
const  path  =  require （'path' ）
const  jsCoveragePath  =  path 。解析（__dirname ， '../coverage' ）

const  jqueryFile  =  进程。ENV 。USE_OLD_JQUERY？'https://code.jquery.com/jquery-1.9.1.min.js' ：'网站/文档/ 4.1 /assets/js/vendor/jquery-slim.min.js '
const  jqueryFile  =  进程。ENV 。USE_OLD_JQUERY？'https://code.jquery.com/jquery-1.9.1.min.js' ：`网站/文档/ $ { PKG 。version_short } /assets/js/vendor/jquery-slim.min.js `
const  bundle  =  进程。ENV 。束 ===  '真'
const  browserStack  =  进程。ENV 。浏览器 ===  'true'

@@ -92,7 +94,7 @@ if（bundle）{
  conf 。浏览器 =  browsersKeys
  记者。推送（'BrowserStack' ）
  文件 =  文件。concat （[
    ' site / docs / 4.1 /assets/js/vendor/jquery-slim.min.js '，
    ` site / docs / $ { pkg 。version_short } /assets/js/vendor/jquery-slim.min.js `，
    'js / dist / util.js' ，
    'js / dist / tooltip.js' ，
    'js / dist /！（util | index | tooltip）.js'  //包括除util.js，index.js和tooltip.js之外的所有js / dist文件
