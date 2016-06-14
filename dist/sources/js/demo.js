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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUwX2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRGVtbyBIZWxwZXIuanMgLSBKYXZhU2NyaXB0IHJvdXRpbmVzIGZvciBaZW5jYXJ0IFN0eWxlIERlbW8gUGFnZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IERheW8gQWthbmppIDxkYWthbmppQHVzZXIubm9yZXBseS5naXRodWIuY29tPlxuICogTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqL1xuXG4oZnVuY3Rpb24oKXtcblx0ZnVuY3Rpb24gY2xlYW5Tb3VyY2UoaHRtbCkge1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL8OXL2csIFwiJmNsb3NlO1wiKVxuXHRcdFx0LnJlcGxhY2UoL8KrL2csIFwiJmxhcXVvO1wiKVxuXHRcdFx0LnJlcGxhY2UoL8K7L2csIFwiJnJhcXVvO1wiKVxuXHRcdFx0LnJlcGxhY2UoL+KGkC9nLCBcIiZsYXJyO1wiKVxuXHRcdFx0LnJlcGxhY2UoL+KGki9nLCBcIiZyYXJyO1wiKTtcblxuXHRcdHZhciBsaW5lcyA9IGh0bWwuc3BsaXQoL1xcbi8pO1xuXHRcdGxpbmVzLnNoaWZ0KCk7XG5cdFx0bGluZXMuc3BsaWNlKC0xLCAxKTtcblx0XHRcblx0XHR2YXIgaW5kZW50U2l6ZSA9IGxpbmVzWzBdLmxlbmd0aCAtIGxpbmVzWzBdLnRyaW0oKS5sZW5ndGgsXG5cdFx0cmUgPSBuZXcgUmVnRXhwKFwiIHtcIiArIGluZGVudFNpemUgKyBcIn1cIik7XG5cdFx0XG5cdFx0bGluZXMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSl7XG5cdFx0XHRpZiAobGluZS5tYXRjaChyZSkpIHtcblx0XHRcdFx0bGluZSA9IGxpbmUuc3Vic3RyaW5nKGluZGVudFNpemUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxpbmU7XG5cdFx0fSk7XG5cdFx0bGluZXMgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuXHRcdHJldHVybiBsaW5lcztcblx0fVxuXG5cdGZ1bmN0aW9uIHN3YXBZRVRJKGZsZXhpYmxlLCBzdGF0aWMpIHtcblx0XHQkKGZsZXhpYmxlKS5hcHBlbmQoKS5pbnNlcnRCZWZvcmUoc3RhdGljKTtcblx0fVxuXHRcblx0JChcImFbaHJlZj0nIyddXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH0pO1xuXHRcblx0dmFyICRidXR0b24gPSAkKFwiPGRpdiBpZD0nc291cmNlLWJ1dHRvbicgY2xhc3M9J2J0biBidG4tcHJpbWFyeSBidG4teHMnPiZsdDsgJmd0OzwvZGl2PlwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdHZhciBodG1sID0gJCh0aGlzKS5wYXJlbnQoKS5odG1sKCk7XG5cdFx0aHRtbCA9IGNsZWFuU291cmNlKGh0bWwpO1xuXHRcdCQoXCIjc291cmNlLW1vZGFsIHByZVwiKS50ZXh0KGh0bWwpO1xuXHRcdCQoXCIjc291cmNlLW1vZGFsXCIpLm1vZGFsKCk7XG5cdH0pO1xuXHRcblx0JChcIi5icy1jb21wb25lbnRcIikuaG92ZXIoZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmFwcGVuZCgkYnV0dG9uKTtcblx0XHQkYnV0dG9uLnNob3coKTtcblx0XHR9LCBmdW5jdGlvbigpe1xuXHRcdFx0JGJ1dHRvbi5oaWRlKCk7XG5cdFx0fSk7XG5cdFx0XG5cdGVucXVpcmVcblx0XHQucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpXCIsIHtcblx0XHRcdG1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3dhcFlFVEkoXCIjeWV0aS10eHRcIiwgXCIjeWV0aS1pbWdcIik7XG5cdFx0XHR9LFxuXHRcdFx0dW5tYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHN3YXBZRVRJKFwiI3lldGktaW1nXCIsIFwiI3lldGktdHh0XCIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KVwiLCB7XG5cdFx0XHRtYXRjaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoXCIjdGVtcC1icmVha1wiKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHR1bm1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNiYW5uZXJcIikucHJlcGVuZChcIjxzcGFuICBpZD0ndGVtcC1icmVhayc+PC9icj48L3NwYW4+XCIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweClcIiwge1xuXHRcdFx0bWF0Y2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKFwiI2Jhbm5lclwiKS5hZGRDbGFzcyhcImJzLWRvY3Mtc2VjdGlvblwiKTtcblx0XHRcdH0sXG5cdFx0XHR1bm1hdGNoOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JChcIiNiYW5uZXJcIikucmVtb3ZlQ2xhc3MoXCJicy1kb2NzLXNlY3Rpb25cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
