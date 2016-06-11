/*!
 * Demo Helper.js - JavaScript routines for Zencart Style Demo Page
 * Copyright (c) 2016 Dayo Akanji <dakanji@user.noreply.github.com>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUwX2N1c3RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBEZW1vIEhlbHBlci5qcyAtIEphdmFTY3JpcHQgcm91dGluZXMgZm9yIFplbmNhcnQgU3R5bGUgRGVtbyBQYWdlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRGF5byBBa2FuamkgPGRha2FuamlAdXNlci5ub3JlcGx5LmdpdGh1Yi5jb20+XG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBjbGVhblNvdXJjZShodG1sKSB7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvw5cvZywgXCImY2xvc2U7XCIpXG5cdFx0XHQucmVwbGFjZSgvwqsvZywgXCImbGFxdW87XCIpXG5cdFx0XHQucmVwbGFjZSgvwrsvZywgXCImcmFxdW87XCIpXG5cdFx0XHQucmVwbGFjZSgv4oaQL2csIFwiJmxhcnI7XCIpXG5cdFx0XHQucmVwbGFjZSgv4oaSL2csIFwiJnJhcnI7XCIpO1xuXG5cdFx0dmFyIGxpbmVzID0gaHRtbC5zcGxpdCgvXFxuLyk7XG5cdFx0bGluZXMuc2hpZnQoKTtcblx0XHRsaW5lcy5zcGxpY2UoLTEsIDEpO1xuXHRcdFxuXHRcdHZhciBpbmRlbnRTaXplID0gbGluZXNbMF0ubGVuZ3RoIC0gbGluZXNbMF0udHJpbSgpLmxlbmd0aCxcblx0XHRyZSA9IG5ldyBSZWdFeHAoXCIge1wiICsgaW5kZW50U2l6ZSArIFwifVwiKTtcblx0XHRcblx0XHRsaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKXtcblx0XHRcdGlmIChsaW5lLm1hdGNoKHJlKSkge1xuXHRcdFx0XHRsaW5lID0gbGluZS5zdWJzdHJpbmcoaW5kZW50U2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGluZTtcblx0XHR9KTtcblx0XHRsaW5lcyA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG5cdFx0cmV0dXJuIGxpbmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3dhcFlFVEkoZmxleGlibGUsIHN0YXRpYykge1xuXHRcdCQoZmxleGlibGUpLmFwcGVuZCgpLmluc2VydEJlZm9yZShzdGF0aWMpO1xuXHR9XG5cdFxuXHQkKFwiYVtocmVmPScjJ11cIikuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fSk7XG5cdFxuXHR2YXIgJGJ1dHRvbiA9ICQoXCI8ZGl2IGlkPSdzb3VyY2UtYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyc+Jmx0OyAmZ3Q7PC9kaXY+XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGh0bWwgPSAkKHRoaXMpLnBhcmVudCgpLmh0bWwoKTtcblx0XHRodG1sID0gY2xlYW5Tb3VyY2UoaHRtbCk7XG5cdFx0JChcIiNzb3VyY2UtbW9kYWwgcHJlXCIpLnRleHQoaHRtbCk7XG5cdFx0JChcIiNzb3VyY2UtbW9kYWxcIikubW9kYWwoKTtcblx0fSk7XG5cdFxuXHQkKCcuYnMtdGlwcyBbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuXHQkKCcuYnMtdGlwcyBbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXHRcblx0JChcIi5icy1jb21wb25lbnRcIikuaG92ZXIoZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmFwcGVuZCgkYnV0dG9uKTtcblx0XHQkYnV0dG9uLnNob3coKTtcblx0XHR9LCBmdW5jdGlvbigpe1xuXHRcdFx0JGJ1dHRvbi5oaWRlKCk7XG5cdFx0fSk7XG5cdFx0XG5cdGVucXVpcmVcblx0XHQucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpXCIsIHtcblx0XHRcdG1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3dhcFlFVEkoXCIjeWV0aS10eHRcIiwgXCIjeWV0aS1pbWdcIik7XG5cdFx0XHR9LFxuXHRcdFx0dW5tYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHN3YXBZRVRJKFwiI3lldGktaW1nXCIsIFwiI3lldGktdHh0XCIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiLCB7XG5cdFx0XHRtYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjdGVtcC1icmVha1wiKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHR1bm1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNiYW5uZXJcIikucHJlcGVuZChcIjxzcGFuICBpZD0ndGVtcC1icmVhayc+PC9icj48L3NwYW4+XCIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweClcIiwge1xuXHRcdFx0bWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI2Jhbm5lclwiKS5hZGRDbGFzcyhcImJzLWRvY3Mtc2VjdGlvblwiKTtcblx0XHRcdH0sXG5cdFx0XHR1bm1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNiYW5uZXJcIikucmVtb3ZlQ2xhc3MoXCJicy1kb2NzLXNlY3Rpb25cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
