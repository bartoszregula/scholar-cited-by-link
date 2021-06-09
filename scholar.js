function scholarLink(event) {
	
	var results = document.querySelectorAll("div.g");

	for (var j = 0; j < results.length; j++) {

		var spans = results[j].getElementsByTagName("span");

		for (var i = 0; i < spans.length; i++) {

			if(spans[i].getElementsByTagName("a").length == 0 && spans[i].innerHTML.indexOf("Cited by") != -1) {

				var content = spans[i].innerHTML;

				var scholar_title = results[j].getElementsByTagName("h3")[0].textContent;
				var scholar_authors = "";

				var first_by = content.indexOf("by");
				var cited_by = content.indexOf("Cited by");
				if(first_by != cited_by + 6) { // double check that this is the author name
					scholar_authors = content.substring(first_by + 3, content.indexOf("<span"));
				}

				content = content.replace(/Cited by \d*/, "<a href=\"https://scholar.google.com/scholar?q=" + encodeURIComponent( scholar_authors + " " + scholar_title) + "\">" + "$&" + "</a>");
				spans[i].innerHTML = content;
			}
		}
	}
}

document.addEventListener('DOMNodeInserted', scholarLink);