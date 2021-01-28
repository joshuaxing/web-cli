// 模块作用域
/*
var people = (function(){
   var age = 18;
   var myname = 'xiaoxing'
   return {
      tell: function () {
        console.log('我的名字'+myname+'年龄'+age)
      }
   }
})()
*/

// 挂载

(function() {
    var age = 18;
    var myname = 'xiaoxing'
    function tell() {
      console.log('我的名字'+myname+'年龄'+age)
    }
    window.people = { tell }
})(window)