工作流工具
====================

模块化配置gulp任务，避免每次重开项目的时候需要手动去修改gulp任务，实现配置化，模块化从而提高可复用性。此思路基于[react-rocket-boilerplate](https://github.com/jakemmarsh/react-rocket-boilerplate)

---

### gulp目录

1. config 静态资源的路径，通过配置source和dest各种文件路径以及服务端口
2. index 启动服务

---

### 现有功能

`gulp sass` 编译config中styles.src里面的scss文件至styles.dest

`gulp coffee` 编译config中scripts.src里面的coffee文件至scripts.dest

`gulp jade` 编译config.templates.src里面的jade文件至templates.dest

`gulp uglify` 压缩js文件

`gulp minify` 压缩css文件

`gulp watch` 监听scss文件 浏览器刷新（coffee已注释，需要的话取消注释即可）

注意事项， `gulp watch`会调用browser-sync, 会启动一个端口(端口在config.serverport中设置)， 目前需要自己手动起一个http服务， 如`http-server -p config.serverport的值`， 然后再启动`gulp watch`。

---

其他一并打包、计算hash值、模板编译等等稍后逐一添加 :)


