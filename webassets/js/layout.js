//Layout Javascript
//
var header_str="<div id='logo'>"+
	"<a href='/' target='_self' class='logo_link' title='Home'>" +
	"<img src='/static/images/app-logo.gif' /></a></div>";
//	"<div class='header_nav'><ul>"+
//	"<li><a href='/static/links/index.html' target='_self' title='Links'><span class='nav_item_bg nav_item_link' /></a></li>"+
//	"</ul></div>";
	//"<li><a href='/' target='_self'><img src='/static/webassets/images/icons/big/home.png'></img></a></li>"+
var header_str_full = "<div id='header'>"+header_str+"</div>";

var footer_str="<div id='footer'>" +
		"<div class='copyright'>" +
		"<a href='http://www.miibeian.gov.cn/' target='_blank'>京ICP备05047012号</a> " +
		"©2014 " +
		"<a href='http://www.crec.cn/' target='_blank'>中国中铁股份有限公司</a> " +
		"版权所有" +
		"</div>" +
		"</div>"

function InitPage(){
	AddHeaderFooter();
}
function UpdateHeaderFooter(){
//	document.getElementById("footer").innerHTML=footer_str;
	document.getElementById("header").innerHTML=header_str;
}
function AddHeaderFooter(){
	NewDiv("header",header_str);
}
function NewDiv(id,html){
	var newDiv=document.createElement("div");
	newDiv.setAttribute("id",id);
	newDiv.innerHTML=html;
	document.body.appendChild(newDiv);
}
function init(){
	document.write(header_str_full);
	document.write(footer_str);
}
// InitPage();
init();
