// view user

// ViewUser
function ViewUser(userName){
	$.ajax({
		url:"/AdminAccount/ViewJson?userName="+userName,
	async:false,
	success:function(data){
		var text = ShowUserJson(data);
		$("#zone").html(text);
	}
	});
	return false;
}

// ShowUserJson
function ShowUserJson(data){
	var html = "<dl class='t-beandisplay'>";
	html = html + "<dt class=''>UserName</dt><dd class=''>"+ data.UserName +"</dd>";
	html = html + "<dt class=''>RealName</dt><dd class=''>"+ data.RealName +"</dd>";
	html = html + "<dt class=''>Email</dt><dd class=''>"+ data.Email +"</dd>";
	html = html + "</dl>";
	return html;
}

// ViewUsers1
function ViewUsers1(userName){
	$.ajax({
		url:"/AdminAccount/UsersJson?userName="+userName,
	async:false,
	success:function(data){
		var text = ShowUsersJson(data);
		$("#zone").html(text);
	}
	});
	return false;
}

// ViewUsers5
function ViewUsers5(url){
	$.ajax({
		url:url,
	async:false,
	success:function(data){
		var text = ShowUsersJson(data);
		$("#zone").html(text);
	}
	});
	return false;
}

// ViewUser6
function ViewUsers6(url){
	$.ajax({
		url:url,
	async:false,
	success:function(data){
		$.jsontotable(data, { id: '#jsontotable', className: 'table table-hover' });
	}
	});
	return false;
}

// ViewUsers2
function ViewUsers2(userName){
	$.ajax({
		url:"/AdminAccount/UsersJson?userName="+userName,
	async:false,
	success:function(data){
		var item;  
		$.each(data,function(i,result){  
			item = "<tr>";
			item = item + "<td>"+result['UserName']+"</td>";
			item = item + "<td>"+result['RealName']+"</td>";
			item = item + "<td>"+result['Email']+"</td>";
			item = item + "<td>"+result['IsEnabled']+"</td>";
			item = item + "</tr>";  
			$('.table').append(item);  
		});  
	}
	});
	return false;
}

// AjaxData
function AjaxData(url){
	var result = "";
	$.ajax({
		url:url,
		async:false,
		success:function(data){
			result = data;		
		}
	});
	return result;
}

// ViewUsers4
function ViewUsers4(userName){
	var url =  "AdminAccount/UsersJson?userName="+userName;
	var data = AjaxData(url);
	buildHtmlTable(data);
	return false;
}

// ViewUsers3
function ViewUsers3(userName){
	$.ajax({
		url:"/AdminAccount/UsersJson?userName="+userName,
	async:false,
	success:function(data){
		buildHtmlTable(data);
	}
	})
	return false;
}

// ShowUsersJson
function ShowUsersJson(data){
	var html = "<table class='t-data-grid'>";
	html =html + "<thead>";
	html =html + "	<tr>";
	html =html + "		<th>UserName</th>";
	html =html + "		<th>RealName</th>";
	html =html + "		<th>Email</th>";
	html =html + "		<th>IsEnabled</th>";
	html =html + "	</tr>";
	html =html + "	</thead>";
	html =html + "	<tbody>";

	$.each(data, function(i,result){
		html = html + "	<tr>";
		html = html + "		<td>" + result["UserName"] +"</td>";
		html = html + "		<td>" + result["RealName"] +"</td>";
		html = html + "		<td>" + result["Email"] +"</td>";
		html = html + "		<td>" + result["IsEnabled"] +"</td>";
		html = html + "	</tr>";
	});
	html =html + "</tbody>";
	html =html + "</table>";
	return html;
}

