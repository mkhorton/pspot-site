PsPotList = function(pspot_files) {

	this.dscreen = $(".dark_screen");
	this.table = $(".pspot_list_table");
	this.tbody = this.table.find("tbody");

	function pspot_row(pspot) {

		var row = $("<tr>");
		var link = $("<td>").append($("<a>").html(pspot.library).attr('href', pspot_url(pspot)));
		var cutoff = $("<td>").html(pspot.CUTOFFS.FINE);
		var xcfunc = $("<td>").html(pspot.LEVEL_THEORY);

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
		this.tbody.html('');
		for (var ppot in pspot_files[el]) {
			if (ppot == 'default')
				continue;
			this.tbody.append(pspot_row(pspot_files[el][ppot]));
		}
	}

	// Assign a function to close this when dark screen is clicked
	// The "proxy" bit controls the local scope
	this.dscreen.on("click", $.proxy(this.hide, this));
	// Always start hidden
	this.hide();

}
