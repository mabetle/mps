/**
 * mabetle javascript lib
 * @author korbenzhang
 */
function addBookmark(title,url) {
	try{
		window.external.AddFavorite( url, title);
	}catch (e){
		try{
			window.sidebar.addPanel(title, url,""); 
		}catch(e){
			alert("加入收藏失败，请使用Ctrl+D进行添加!")
		}
	}
}
function setHomepage(url){  
	if (document.all){
		document.body.style.behavior  = 'url(#default#homepage)' ;
		document.body.setHomePage(url);
	}	else if  (window.sidebar)	{
		if (window.netscape)		{
			try {
				netscape.security.PrivilegeManager.enablePrivilege( " UniversalXPConnect " );
			}catch (e) {
				alert( " 该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true " );
			}
		}
		var prefs  =  Components.classes[ ' @mozilla.org/preferences-service;1 ' ].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref( ' browser.startup.homepage ' ,  url );
	}
}
