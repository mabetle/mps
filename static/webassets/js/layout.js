//Layout Javascript
//

var header_str="<div id='logo'>"+
	"<a href='/' target='_self' class='logo_link' title='Home'></a></div>"+
	"<div class='header_nav'><ul>"+
	"<li><a href='/links/' target='_self' title='Links'><span class='nav_item_bg nav_item_link' /></a></li>"+
	"</ul></div>";

	//"<li><a href='/' target='_self'><img src='/mps/static/webassets/images/icons/big/home.png'></img></a></li>"+


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


