/*!
 * Demo Helper.js - JavaScript routines for Zencart Style Demo Page
 * Copyright (c) 2016 Dayo Akanji <dakanji@users.no.reply.github.com>
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUwX2N1c3RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBEZW1vIEhlbHBlci5qcyAtIEphdmFTY3JpcHQgcm91dGluZXMgZm9yIFplbmNhcnQgU3R5bGUgRGVtbyBQYWdlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRGF5byBBa2FuamkgPGRha2FuamlAdXNlcnMubm8ucmVwbHkuZ2l0aHViLmNvbT5cbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuKGZ1bmN0aW9uKCl7XG5cdGZ1bmN0aW9uIGNsZWFuU291cmNlKGh0bWwpIHtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC/Dly9nLCBcIiZjbG9zZTtcIilcblx0XHRcdC5yZXBsYWNlKC/Cqy9nLCBcIiZsYXF1bztcIilcblx0XHRcdC5yZXBsYWNlKC/Cuy9nLCBcIiZyYXF1bztcIilcblx0XHRcdC5yZXBsYWNlKC/ihpAvZywgXCImbGFycjtcIilcblx0XHRcdC5yZXBsYWNlKC/ihpIvZywgXCImcmFycjtcIik7XG5cblx0XHR2YXIgbGluZXMgPSBodG1sLnNwbGl0KC9cXG4vKTtcblx0XHRsaW5lcy5zaGlmdCgpO1xuXHRcdGxpbmVzLnNwbGljZSgtMSwgMSk7XG5cdFx0XG5cdFx0dmFyIGluZGVudFNpemUgPSBsaW5lc1swXS5sZW5ndGggLSBsaW5lc1swXS50cmltKCkubGVuZ3RoLFxuXHRcdHJlID0gbmV3IFJlZ0V4cChcIiB7XCIgKyBpbmRlbnRTaXplICsgXCJ9XCIpO1xuXHRcdFxuXHRcdGxpbmVzID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpe1xuXHRcdFx0aWYgKGxpbmUubWF0Y2gocmUpKSB7XG5cdFx0XHRcdGxpbmUgPSBsaW5lLnN1YnN0cmluZyhpbmRlbnRTaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsaW5lO1xuXHRcdH0pO1xuXHRcdGxpbmVzID0gbGluZXMuam9pbihcIlxcblwiKTtcblx0XHRyZXR1cm4gbGluZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBzd2FwWUVUSShmbGV4aWJsZSwgc3RhdGljKSB7XG5cdFx0JChmbGV4aWJsZSkuYXBwZW5kKCkuaW5zZXJ0QmVmb3JlKHN0YXRpYyk7XG5cdH1cblx0XG5cdCQoXCJhW2hyZWY9JyMnXVwiKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9KTtcblx0XG5cdHZhciAkYnV0dG9uID0gJChcIjxkaXYgaWQ9J3NvdXJjZS1idXR0b24nIGNsYXNzPSdidG4gYnRuLXByaW1hcnkgYnRuLXhzJz4mbHQ7ICZndDs8L2Rpdj5cIikuY2xpY2soZnVuY3Rpb24oKXtcblx0XHR2YXIgaHRtbCA9ICQodGhpcykucGFyZW50KCkuaHRtbCgpO1xuXHRcdGh0bWwgPSBjbGVhblNvdXJjZShodG1sKTtcblx0XHQkKFwiI3NvdXJjZS1tb2RhbCBwcmVcIikudGV4dChodG1sKTtcblx0XHQkKFwiI3NvdXJjZS1tb2RhbFwiKS5tb2RhbCgpO1xuXHR9KTtcblx0XG5cdCQoJy5icy10aXBzIFtkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG5cdCQoJy5icy10aXBzIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cdFxuXHQkKFwiLmJzLWNvbXBvbmVudFwiKS5ob3ZlcihmdW5jdGlvbigpe1xuXHRcdCQodGhpcykuYXBwZW5kKCRidXR0b24pO1xuXHRcdCRidXR0b24uc2hvdygpO1xuXHRcdH0sIGZ1bmN0aW9uKCl7XG5cdFx0XHQkYnV0dG9uLmhpZGUoKTtcblx0XHR9KTtcblx0XHRcblx0ZW5xdWlyZVxuXHRcdC5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweClcIiwge1xuXHRcdFx0bWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzd2FwWUVUSShcIiN5ZXRpLXR4dFwiLCBcIiN5ZXRpLWltZ1wiKTtcblx0XHRcdH0sXG5cdFx0XHR1bm1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3dhcFlFVEkoXCIjeWV0aS1pbWdcIiwgXCIjeWV0aS10eHRcIik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpXCIsIHtcblx0XHRcdG1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiN0ZW1wLWJyZWFrXCIpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHVubWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI2Jhbm5lclwiKS5wcmVwZW5kKFwiPHNwYW4gIGlkPSd0ZW1wLWJyZWFrJz48L2JyPjwvc3Bhbj5cIik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KVwiLCB7XG5cdFx0XHRtYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjYmFubmVyXCIpLmFkZENsYXNzKFwiYnMtZG9jcy1zZWN0aW9uXCIpO1xuXHRcdFx0fSxcblx0XHRcdHVubWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI2Jhbm5lclwiKS5yZW1vdmVDbGFzcyhcImJzLWRvY3Mtc2VjdGlvblwiKTtcblx0XHRcdH1cblx0XHR9KTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
