
$(document).ready(function(){
	$("#button").click(function(){
		//post方法异步获得ajax_load.html文件内容并显示于当前页：
		/*
		   $.post("ajax_load.html",function(data){
		//alert(data);
		$("#changeCon").html(data);
		});
		*/
		//get方法异步获得ajax_load.html文件内容并显示于当前页：
		/*
		   $.get("ajax_load.html",function(data){
		   $("#changeCon").html(data);
		   });
		   */
		//ajax方法异步获得ajax_load.html文件内容并显示于当前页：
		$.ajax({
			url:"/DemoAjax/AjaxValue",
		async:false,
		success:function(data)
		{
			$("#changeCon").html(data);
		}
		})
	});

	$("#dismiss").click(function(){
		//post方法异步获得ajax_load.html文件内容并显示于当前页：
		/*
		   $.post("ajax_load.html",function(data){
		//alert(data);
		$("#changeCon").html(data);
		});
		*/
		//get方法异步获得ajax_load.html文件内容并显示于当前页：
		/*
		   $.get("ajax_load.html",function(data){
		   $("#changeCon").html(data);
		   });
		   */
		//ajax方法异步获得ajax_load.html文件内容并显示于当前页：
		$.ajax({
			url:"/DemoAjax/AjaxDismissValue",
		async:false,
		success:function(data)
		{
			$("#changeCon").html(data);
		}
		})
	});
}) 



