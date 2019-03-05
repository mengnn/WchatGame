$(function() {
	Storages.alwaysUseJsonInStorage(true);
	var openid = Storages.cookieStorage.get('openid');
	var nickname = Storages.cookieStorage.get('nickname');
	var headimgurl = Storages.cookieStorage.get('headimgurl');
	var gameTime = Storages.cookieStorage.get('gameTime');
	
	$("#nickname").text(nickname);
	$("#gameTime").text(gameTime+"秒");
	$("#headimgurl").attr("src",headimgurl);
	
	if(!gameTime){
		alert("请先参加游戏！");
		window.location.href="../login.html";
	}else if(window.localStorage.getItem("flag")!="part6"){
		alert("请先参加游戏！");
		window.location.href="../login.html";
	}else{
	$.ajax({
		url : "/updateUser",
		data : JSON.stringify({
			openid : openid,
			nickname : nickname,
			headimgurl : headimgurl,
			gameTime : gameTime
		}),
		type : "POST",
		async : true,
		dataType : "json",
		contentType : "application/json; charset=UTF-8",
	}).done(function(data) {
		$(".rankingMain").empty();
		var msg = JSON.parse(data.message);
		$(".rankingMain").html("    <li>\n" +
				"      <img src=\"../images/n1.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[0][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[0][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[0][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n2.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[1][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[1][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[1][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n3.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[2][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[2][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[2][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n4.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[3][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[3][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[3][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n5.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[4][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[4][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[4][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n6.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[5][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[5][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[5][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n7.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[6][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[6][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[6][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n8.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[7][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[7][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[7][2]+"秒</span>\n" +
				"    </li>\n" +
				"    <li>\n" +
				"      <img src=\"../images/n9.png\" class=\"rankingPosition\"/>\n" +
				"      <img src=\""+msg[8][1]+"\" class=\"rankingPerson\" />\n" +
				"      <b class=\"rankingName\">"+msg[8][0]+"</b>\n" +
				"      <span class=\"rankingTime\">"+msg[8][2]+"秒</span>\n" +
				"    </li>");
	}).fail(
			function(xhr, status, errorThrown) {
				alert("Sorry, there was a problem! " + "Error: "
						+ errorThrown + "Status: " + status);
				console.log("Error: " + errorThrown);
				console.log("Status: " + status);
				console.dir(xhr);
			}).always(function(xhr, status) {
		console.log("The request is complete!");
	});
	}
});
