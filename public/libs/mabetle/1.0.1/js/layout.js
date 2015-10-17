//Layout Javascript
//

var header_str="<div id='logo'>"+
	"<a href='/' style='text-decoration:none;'  target='_self'><span style='height:75px;width:250px;display:block;'></span></a></div>"+
	"<div class='header_nav'><ul>"+
	"<li><a href='/' target='_self'><img src='/mgs/static/webassets/images/icons/big/home.png'></img></a></li>"+
	"<li><a href='/links/' target='_self'><img src='/mgs/static/webassets/images/icons/big/apps.png'></img></a></li>"+
	"</ul></div>";

var header_str_full = "<div id='header'>"+header_str+"</div>";

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
}

// InitPage();
init();


