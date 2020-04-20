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
