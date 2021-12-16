function scholarLink(event) {
	
	var results = document.querySelectorAll("div.g");

	for (var j = 0; j < results.length; j++) {

		var spans = results[j].getElementsByTagName("span");

		for (var i = 0; i < spans.length; i++) {

			if(spans[i].innerHTML.indexOf("Cited by") == 0) {

				var content = spans[i].innerHTML;

				var scholar_title = results[j].getElementsByTagName("h3")[0].textContent;
				var scholar_authors = "";

				var first_span = spans[i].parentElement.getElementsByTagName("span")[0].innerHTML;
				if(first_span.indexOf("by") == 0) { // double check that this is the author name
					scholar_authors = first_span.substring(3);
				}

				content = content.replace(/Cited by \d*/, "<a href=\"https://scholar.google.com/scholar?q=" + encodeURIComponent( scholar_authors + " " + scholar_title) + "\">" + "$&" + "</a>");
				spans[i].innerHTML = content;
			}
		}
	}
}

document.addEventListener('DOMNodeInserted', scholarLink);