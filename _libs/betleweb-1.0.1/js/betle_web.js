/*!
 * Betle Web v0.0.1
 * Copyright 2011-2017 korbenzhang
 * Licensed under the BSD-2-Clause license
 */

// AjaxReload
function ajaxReload(url){
	$.ajax({
		url:url,
		async:false,
		success:function(data){
			// do nothings
		}
	});
	window.location.reload();
	return false;
}


// base_web.js

/**
 * mabetle javascript lib
 */
function addBookmark(title,url) {
	try{
		window.external.AddFavorite( url, title);
	}catch (e){
		try{
			window.sidebar.addPanel(title, url,""); 
		}catch(e2){
			alert("加入收藏失败，请使用Ctrl+D进行添加!");
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

// calc.js

function add(a,b){
	return a + b;
}



// checkboxAll set checkbox checked.
// target: checkbox name
// b: true or false
function checkboxAll(target, b){
	var checkboxes = document.getElementsByName(target);
	for (var i=0; i<checkboxes.length; i++)  {
		checkboxes[i].checked = b;
	}
}

// toggleCheckbox toggle checkbox 
// source: from checkbox
// target: checkbox name
function toggleCheckbox(source,target){
	var d = document,
	items=d.getElementsByName(target),
	len = items.length;
	for(var i=0;i<len;i++){
		items[i].checked=source.checked;
	}
}

// toggleCheckboxByClass
function toggleCheckboxClass(source,className){
	var d = document,
	items=d.getElementsByClass(className),
	len = items.length;
	for(var i=0;i<len;i++){
		items[i].checked=source.checked;
	}
}

// reverseCheckbox reverse checkbox
// target: checkbox name
function reverseCheckbox(target){
	var checkboxes = document.getElementsByName(target);
	for (var i = 0; i < checkboxes.length ;i++) {
		var b = checkboxes[i].checked;
		checkboxes[i].checked = !b; 
	}
}

// 
// define in package.json
//


// one json data keys
function jsonKeys(data){
	var cols = [];
	for (var key in data) {
		cols.push(key);
	}
	return cols;
}

function isInArray(col, cols){
	if (cols === "") {
		return false;
	}
	if (cols.length === 0) {
		return false;
	}
	for (var i = 0, len = cols.length; i < len; i++) {
		if (col === cols[i]){
			return true;
		}
	}
	return false;
}

function isNotInArraay(col,cols){
	return !isInArray(col,cols)
}

// get used columns
// cols: all cols
// include: include cols, comma seperate string
// exclude: exclude cols, comma seperate string
function getUsedCols(cols,include,exclude){
	var result = [];
	var includeArray = include.split(",");
	var excludeArray = exclude.split(",");

	//console.log("include array:", includeArray)

	if ((includeArray.length === 0) || (includeArray.length === 1 && includeArray[0] === "")) {
		includeArray = cols;
		//console.log("put cols to include, include array:", includeArray);
	}

	for (var i = 0, len = cols.length; i < len; i++) {
		var col = cols[i];
		// skip some special columns
		if (col === "Id") {
			continue;
		}
		if (isInArray(col,includeArray) && isNotInArraay(col,excludeArray)){
			result.push(col);
		} 
	}
	return result;
}

function isHasKey(key,options) {
	for (col in options){
		if (col === key ) {
			return true;
		}
	}
	return false;
}

function getExclude(options) {
	var exclude = getOption("exclude",options);
	if (exclude === ""){
		return "Id"
	}
	return exclude
}

function getOption(name,options) {
	for (var key in options){
		if (name === key) {
			return options[key];
		}
	}
	return "";
}

// jsonToTable
function jsonToTable(rows,options){
	if (rows.length === 0) {
		return "No results.";
	}

	var table="<table class='mbt-grid'><thead><tr>";

	var include = getOption("include",options);
	var exclude = getOption("exclude",options);
	
	var allCols = jsonKeys(rows[0]);
	var cols = getUsedCols(allCols,include,exclude);
	
	// add head
	table = table + colsHead(cols);
	table = table + "</tr></thead>";
	table = table + "<tbody>";
	//add body
	table = table + jsonTableBody(rows,cols);
	table= table + "</tbody></table>";
	return table;
}

function colsHead(cols){
	var table = "";
	for (var i = 0; i < cols.length; i++) {
		table = table + "<th>" + cols[i] + "</th>";
	}
	return table;
}

function jsonTableBody(rows,cols){
	var table = "";
	for (var row = 0; row < rows.length; row++) {
		table = table + "<tr>"
		for (var col = 0; col < cols.length; col++) {
			var key = cols[col];
			table = table + "<td class='"+ key +"'>" + rows[row][key] + "</td>";
		}
		table = table + "</tr>"
	}
	return table;
}

function parseJsonTable(url){
	$.getJSON(url, function(data) {
		var table = jsonToTable(data);
		$("#zone").html(table);
		zoneDialog();
	});
}



// switchLangEn
function switchLangEn(){
	var url = "/Lang/ChangeLang?lang=en-US";
	AjaxReload(url);
	return false;
}

// switchLangZh
function switchLangZh(){
	var url = "/Lang/ChangeLang?lang=zh-CN";
	AjaxReload(url);
	return false;
}



// Nav
$(document).ready(function(){
	$(".nav").accessibleDropDown();
});

$.fn.accessibleDropDown = function (){
	var el = $(this);
	/* Setup dropdown menus for IE 6 */
	$("li", el).mouseover(function() {
		$(this).addClass("hover");
	}).mouseout(function() {
		$(this).removeClass("hover");
	});

	/* Make dropdown menus keyboard accessible */
	$("a", el).focus(function() {
		$(this).parents("li").addClass("hover");
	}).blur(function() {
		$(this).parents("li").removeClass("hover");
	});
};






document.getElementByClass = function (classname) {
	var elements = [];
	var alltags = document.all ? document.all : document.getElementsByTagName("*");

	for (var i=0; i<alltags.length; i++) {
		var classNames = alltags[i].className.split(" ");
		if (classNames.contain(classname))
			elements[elements.length] = alltags[i];
	}
	return elements;
}




function tableToJson(table) {
	var data = [];
	// first row needs to be headers
	var headers = [];
	for (var i=0; i<table.rows[0].cells.length; i++) {
		headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
	}
	// go through cells
	for (var i=1; i<table.rows.length; i++) {
		var tableRow = table.rows[i];
		var rowData = {};
		for (var j=0; j<tableRow.cells.length; j++) {
			rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
		}
		data.push(rowData);
	}		
	return data;
}



// zoneDialog show zone in dialog mode
function zoneDialog(){
	$("#zone").dialog({
		minWidth:800,
		width:'auto',
		colseOnEscape:true,
		modal: true,
		buttons: {
			关闭: function() {
				$( this).dialog( "close" );
			}
		}
	});
	// update zone height to adapt content.
	$("#zone").css({
		width: 'auto',
		minWidth:800,
		height: 'auto' 
	});

}

