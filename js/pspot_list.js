PsPotList = function(visible) {

	this.dscreen = $(".dark_screen");
	this.table = $(".pspot_list_table");
	this.tbody = this.table.find("tbody");

	function pspot_row(pspot) {

		var row = $("<tr>");
		var link = $("<td>").append($("<a>").html(pspot.file).attr('href', "pspot.html?=" + pspot.file));
		var cutoff = $("<td>").html(pspot.cutoff);
		var xcfunc = $("<td>").html(pspot.xc);

		return row.append(link).append(cutoff).append(xcfunc);
	}

	this.hide = function() {
	    this.dscreen.css("visibility", "hidden");
	}

	this.show = function() {
	    this.dscreen.css("visibility", "visible");	
	}

	this.compile = function(el) {
		// Compile the list for the given element
		var i = 0;
		this.tbody.html('');
		while (i in pspot_files[el]) {
			this.tbody.append(pspot_row(pspot_files[el][i]));
			i++;
		}
	}

	// Assign a function to close this when dark screen is clicked
	// The "proxy" bit controls the local scope
	this.dscreen.on("click", $.proxy(this.hide, this));

	if (visible)
		this.show();
	else
		this.hide();

}
