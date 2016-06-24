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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUwX2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBEZW1vIEhlbHBlci5qcyAtIEphdmFTY3JpcHQgcm91dGluZXMgZm9yIFplbmNhcnQgU3R5bGUgRGVtbyBQYWdlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRGF5byBBa2FuamkgPGRha2FuamlAdXNlci5ub3JlcGx5LmdpdGh1Yi5jb20+XG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBjbGVhblNvdXJjZShodG1sKSB7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvw5cvZywgXCImY2xvc2U7XCIpXG5cdFx0XHQucmVwbGFjZSgvwqsvZywgXCImbGFxdW87XCIpXG5cdFx0XHQucmVwbGFjZSgvwrsvZywgXCImcmFxdW87XCIpXG5cdFx0XHQucmVwbGFjZSgv4oaQL2csIFwiJmxhcnI7XCIpXG5cdFx0XHQucmVwbGFjZSgv4oaSL2csIFwiJnJhcnI7XCIpO1xuXG5cdFx0dmFyIGxpbmVzID0gaHRtbC5zcGxpdCgvXFxuLyk7XG5cdFx0bGluZXMuc2hpZnQoKTtcblx0XHRsaW5lcy5zcGxpY2UoLTEsIDEpO1xuXHRcdFxuXHRcdHZhciBpbmRlbnRTaXplID0gbGluZXNbMF0ubGVuZ3RoIC0gbGluZXNbMF0udHJpbSgpLmxlbmd0aCxcblx0XHRyZSA9IG5ldyBSZWdFeHAoXCIge1wiICsgaW5kZW50U2l6ZSArIFwifVwiKTtcblx0XHRcblx0XHRsaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKXtcblx0XHRcdGlmIChsaW5lLm1hdGNoKHJlKSkge1xuXHRcdFx0XHRsaW5lID0gbGluZS5zdWJzdHJpbmcoaW5kZW50U2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGluZTtcblx0XHR9KTtcblx0XHRsaW5lcyA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG5cdFx0cmV0dXJuIGxpbmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3dhcFlFVEkoZmxleGlibGUsIHN0YXRpYykge1xuXHRcdCQoZmxleGlibGUpLmFwcGVuZCgpLmluc2VydEJlZm9yZShzdGF0aWMpO1xuXHR9XG5cdFxuXHQkKFwiYVtocmVmPScjJ11cIikuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fSk7XG5cdFxuXHRlbnF1aXJlXG5cdFx0LnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjk5MnB4KVwiLCB7XG5cdFx0XHRtYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHN3YXBZRVRJKFwiI3lldGktdHh0XCIsIFwiI3lldGktaW1nXCIpO1xuXHRcdFx0fSxcblx0XHRcdHVubWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzd2FwWUVUSShcIiN5ZXRpLWltZ1wiLCBcIiN5ZXRpLXR4dFwiKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweClcIiwge1xuXHRcdFx0bWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI3RlbXAtYnJlYWtcIikucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0dW5tYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjYmFubmVyXCIpLnByZXBlbmQoXCI8c3BhbiAgaWQ9J3RlbXAtYnJlYWsnPjwvYnI+PC9zcGFuPlwiKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpXCIsIHtcblx0XHRcdG1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNiYW5uZXJcIikuYWRkQ2xhc3MoXCJicy1kb2NzLXNlY3Rpb25cIik7XG5cdFx0XHR9LFxuXHRcdFx0dW5tYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjYmFubmVyXCIpLnJlbW92ZUNsYXNzKFwiYnMtZG9jcy1zZWN0aW9uXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
