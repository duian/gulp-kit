'use strict';

var fs = require('fs');
// 文件格式过滤， 只载入js或者coffee文件
var onlyScripts = require('./util/script-filter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var config = require('./config');

// 注册所有任务
tasks.forEach(function(task) {
  require('./tasks/' + task);
})