$(function() {
	Storages.alwaysUseJsonInStorage(true);
	var _url = window.location+"";
	if(_url.indexOf("openid")>0){
		Storages.cookieStorage.setConf({path:'/',expires:100}).set('openid',getQueryString("openid"));
		Storages.cookieStorage.setConf({path:'/',expires:100}).set('nickname',decodeURIComponent(getQueryString("nickname")));
		Storages.cookieStorage.setConf({path:'/',expires:100}).set('headimgurl',getQueryString("headimgurl"));
	}else{
		location.href="https://open.weixin.qq.com/connect/oauth2/authorize?" +
		"appid=wx6390b35d6492fb2b&redirect_uri=http://puzzle.cac2018.cn/auth&response_type=code" +
		"&scope=snsapi_userinfo&state=123#wechat_redirect";
	}
});

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = decodeURI(window.location.search).substr(1).match(reg);
	if (r != null) return unescape(r[2]); 
	return null;
}