#!/usr/bin/env node


var path=require('path');
var fs=require('fs')
var dir=path.dirname(fs.realpathSync(__filename))+"/../"
require(dir+"index.js").create_node();
