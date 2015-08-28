
// build html table
function buildHtmlTable(data) {
	// add grid header
	var columns = addAllColumnHeaders(data);

	for (var i = 0 ; i < data.length ; i++) {
		var row$ = $('<tr/>');
		for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
			var cellValue = data[i][columns[colIndex]];

			if (cellValue == null) { cellValue = ""; }

			row$.append($('<td/>').html(cellValue));
		}
		$("#data-grid").append(row$);
	}
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(data)
{
	var columnSet = [];
	var headerTr$ = $('<tr/>');

	for (var i = 0 ; i < data.length ; i++) {
		var rowHash = data[i];
		for (var key in rowHash) {
			if ($.inArray(key, columnSet) == -1){
				columnSet.push(key);
				headerTr$.append($('<th/>').html(key));
			}
		}
	}
	$("#data-grid").append(headerTr$);
	return columnSet;
}


