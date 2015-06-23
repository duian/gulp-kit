# 工作流工具

## gulp目录
### config 配置source和dist各种文件路径以及服务端口
### index 启动服务

## 现有功能
### gulp sass 编译config中styles.src里面的scss文件至styles.dest

### gulp coffee 编译config中scripts.src里面的coffee文件至scripts.dest

### gulp uglify 压缩js文件

### gulp minify 压缩css文件

### gulp watch 监听scss文件 浏览器刷新（coffee已注释，需要的话取消注释即可）

### 注意事项， gulp watch会调用browser-sync, 会启动一个端口(端口在config.serverport中设置)， 目前需要自己手动起一个http服务， 如http-server -p config.serverport的值， 然后再启动gulp watch。

其他一并打包、计算hash值、模板编译等等稍后逐一添加 :)

此思路基于[react-rocket-boilerplate](https://github.com/jakemmarsh/react-rocket-boilerplate)
