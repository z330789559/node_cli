/**
 * Created by baozhong on 2016/12/28.
 */
var exec = require('child_process').exec;
var cmdStr="git status";

exports.create_node=function(){
  return  exec(cmdStr, function(err,stdout,stderr){
        if(err) {
            console.log('get weather api error:'+stderr);
        } else {
            console.log(stdout)
        }
    });
};
