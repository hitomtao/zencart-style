(function(){
	function cleanSource(html) {
		html = html.replace(/×/g, "&close;")
			.replace(/«/g, "&laquo;")
			.replace(/»/g, "&raquo;")
			.replace(/←/g, "&larr;")
			.replace(/→/g, "&rarr;");

		var lines = html.split(/\n/);
		lines.shift();
		lines.splice(-1, 1);
		
		var indentSize = lines[0].length - lines[0].trim().length,
		re = new RegExp(" {" + indentSize + "}");
		
		lines = lines.map(function(line){
			if (line.match(re)) {
				line = line.substring(indentSize);
			}
			return line;
		});
		lines = lines.join("\n");
		return lines;
	}

	function swapYETI(flexible, static) {
		$(flexible).append().insertBefore(static);
	}
	
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});
	
	var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
		var html = $(this).parent().html();
		html = cleanSource(html);
		$("#source-modal pre").text(html);
		$("#source-modal").modal();
	});
	
	$('.bs-tips [data-toggle="popover"]').popover();
	$('.bs-tips [data-toggle="tooltip"]').tooltip();
	
	$(".bs-component").hover(function(){
		$(this).append($button);
		$button.show();
		}, function(){
			$button.hide();
		});
		
	enquire
		.register("screen and (min-width:992px)", {
			match: function() {
				swapYETI("#yeti-txt", "#yeti-img");
			},
			unmatch: function() {
				swapYETI("#yeti-img", "#yeti-txt");
			}
		})
		.register("screen and (min-width:768px)", {
			match: function() {
				$("#temp-break").remove();
			},
			unmatch: function() {
				$("#banner").prepend("<span  id='temp-break'></br></span>");
			}
		})
		.register("screen and (min-width:768px) and (max-width:991px)", {
			match: function() {
				$("#banner").addClass("bs-docs-section");
			},
			unmatch: function() {
				$("#banner").removeClass("bs-docs-section");
			}
		});
})();