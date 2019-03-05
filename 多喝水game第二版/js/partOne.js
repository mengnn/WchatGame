// 拖动图片
/***********
4 8 7
3 5 9
1 2 6
***********/
onload = function(){//随机生成选择图片的位置
  var ul = $(".partUl");
  var lis = $(".partUl").find("li");
  var arr = [];
  for(var i = 0; i < lis.length; i++){
      arr.push(lis[i]);
  }
  arr.sort(function(a,b){
      var rand = Math.random();
      if(rand > 0.5) return 1;
      else if(rand < 0.5) return -1;
      else return 0;
  });
  for(var i = 0; i < arr.length; i++){
      ul.append(arr[i]);
  }
}
// 拖动内容
$(function () {
    $(".partDrag").draggable({
      revert: true,
      start:function(event,ui){
      },
      stop:function( event, ui ){
      }
    });


   // 放置到九宫格内
    $("#partDrop1_1").droppable({
        //hoverClass: "ui-state-active",
        accept: "#part1_1",
        drop: function (event, ui) {
            var thisSrc=$("#part1_1").find("img").attr("src")
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_1").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_2").droppable({
        accept: "#part1_2",
        drop: function (event, ui) {
            var thisSrc=$("#part1_2").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_2").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_3").droppable({
        accept: "#part1_3",
        drop: function (event, ui) {
            var thisSrc=$("#part1_3").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_3").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_4").droppable({
        accept: "#part1_4",
        drop: function (event, ui) {
            var thisSrc=$("#part1_4").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_4").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_5").droppable({
        accept: "#part1_5",
        drop: function (event, ui) {
            var thisSrc=$("#part1_5").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_5").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_6").droppable({
        accept: "#part1_6",
        drop: function (event, ui) {
            var thisSrc=$("#part1_6").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_6").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_7").droppable({
        accept: "#part1_7",
        drop: function (event, ui) {
            var thisSrc=$("#part1_7").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_7").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_8").droppable({
        accept: "#part1_8",
        drop: function (event, ui) {
            var thisSrc=$("#part1_8").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_8").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });
    $("#partDrop1_9").droppable({
        accept: "#part1_9",
        drop: function (event, ui) {
            var thisSrc=$("#part1_9").find("img").attr("src");
            $(this).addClass("ui-state-highlight")
                    .html("<img src="+thisSrc+" width='100%' height='100%' />");
            $("#part1_9").remove();
            $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();//每次只显示三个图片
            var partUllength=$(".partUl").find("li").length; //获取每次拖动图片后剩余图片的个数
            if(partUllength == 0){
              $(".nextBox").find("img").show();
            }
        }
    });

    $(".partUl").find("li").filter(":lt(3)").show().end().filter(":gt(2)").hide();

    var partulMainWith=$(".partulMain").find("li").width();//获取放置li标签的宽度
    $(".partulMain").find("li").height(partulMainWith);//设置放置li标签的高度
    $(".partulMain").find("li").find("img").height(partulMainWith);//设置放置img的高度
    $(".partulMain").find("li").find("img").width(partulMainWith);//设置放置img的高度
    var partUlWith=$(".partUl").find("li").width()
    $(".partUl").height(partUlWith);//设置拖动ul标签的高度

    $(window).resize(function() {//改变窗口时保持比例不变
      var partulMainWith=$(".partulMain").find("li").width();//获取放置li标签的宽度
      $(".partulMain").find("li").height(partulMainWith);//设置放置li标签的高度
      $(".partulMain").find("li").find("img").height(partulMainWith);//设置放置img的高度
      $(".partulMain").find("li").find("img").width(partulMainWith);//设置放置img的高度
      var partUlWith=$(".partUl").find("li").width()
      $(".partUl").height(partUlWith);//设置拖动ul标签的高度
    });


    // 设置5秒后九宫格图片消失
    setTimeout(function(){
      $(".partulMain").find("li").each(function(){
        // $(this).find("img").remove();
      });
      $(".partUl").animate({opacity:"1"},2000);
    },7000)

});

// 图片动画结束后清除掉
 document.getElementsByClassName("partImg1")[0].addEventListener("webkitAnimationEnd", function() {
     //webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationen
     $(this).remove();
 })
document.getElementsByClassName("partImg2")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg3")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg4")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg5")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg6")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg7")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg8")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
document.getElementsByClassName("partImg9")[0].addEventListener("webkitAnimationEnd", function() {
     $(this).remove();
 })
