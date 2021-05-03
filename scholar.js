function scholarLink(event) {
	var results = document.querySelectorAll("div.g");

	for (var j = 0; j < results.length; j++) {

		var spans = results[j].getElementsByTagName("span");

		for (var i = 0; i < spans.length; i++) {

			if(!spans[i].children.length && spans[i].innerHTML.indexOf("Cited by") != -1) {
				var scholar_title = results[j].getElementsByTagName("h3")[0].textContent;
				var authors = spans[i].parentElement.firstElementChild.innerHTML;
				var scholar_authors = authors.substr(authors.indexOf("by ")+3);
        		spans[i].innerHTML = "<a href='https://scholar.google.com/scholar?q=" + encodeURIComponent( scholar_authors + " " + scholar_title) + "'>" + spans[i].textContent + "</a>"; 
        	}
    	}
    }
}

document.addEventListener('DOMNodeInserted', scholarLink);

