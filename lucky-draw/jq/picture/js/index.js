
var t, //循环
c=7,   //图片数量
a,     //随机数
b=5;   //结果数

/*
 *这个函数可使图片按一定顺序闪烁
 *启用只需把kaishi()函数中的huoqu2()替换成huoqu()
 *
function huoqu(){
  if(c>0){
     document.getElementById('all-picture').innerHTML="<img src=\"images/"+c+".jpeg\" id=\"img-sdf1\" width=\"100%\" height=\"100%\">";
     t=setTimeout("huoqu()",500);
     c=c-1;
  }else{
     c=14;
	 huoqu()
  }
}
*/

/*
 *这个函数按随机数闪烁图片
 *默认已启用
 */
function huoqu2(){
     a = Math.floor(Math.random()*c+1);
     $('#all-picture').html("<img src=\"images/demo"+a+".jpg\" id=\"img-sdf1\" width=\"100%\" height=\"100%\">");
     t=setTimeout("huoqu2()",150);
}

function start(){
   $('#btn-kfj').html("<button id=\"button\" type=\"button\" onclick=\"stop()\" class=\"btn btn-danger btn-default\">点击结束</button>");
   huoqu2();
}

function reset(){
   $('#btn-kfj').html("<button id=\"button\" type=\"button\" onclick=\"start()\" class=\"btn btn-success btn-default\">点击开始</button>");
   $("#is-picture").children().remove();
   b=5;
}

function stop(){
   clearTimeout(t);
   var k=c+1;
   $('#box2').css("background","url('images/demo"+a+".jpg') 50% 50%");
   $('#is-picture').append("<img class='img-chosed' src=\"images/demo"+a+".jpg\" id=\"img-sdf1\" width=\"20%\" height=\"100%\">");
   if(b>1){
   $('#btn-kfj').html("<button id=\"button\" type=\"button\" onclick=\"start()\" class=\"btn btn-success btn-default\">点击开始</button>");
   }else{
   $('#btn-kfj').html("<button id=\"button\" type=\"button\" class=\"btn btn-warning btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">重置结果</button>");
   }
   $("#title").css("color","#fff");
   b--;
}
function haha(){
   alert("hello");
}