# scholar-cited-by-link

A Google Chrome / Firefox extension that restores the clickable "Cited by" links in Google search results. 

The link makes a search on Google Scholar using the names of the authors + the title of the relevant page. Note that this only uses the information provided by Google in the search result itself, so the page titles are not always "clean" in the sense that they sometimes have journal titles / publisher info / other random crap attached at the end. There does not appear to be a good way to extract just the title of the paper, but the search on Google Scholar seems to handle it well anyway.

Please report if the search doesn't work properly for some papers.

## Installation instructions

### Chrome

1. Clone this repository or download the .zip file and unpack.
2. Open the Chrome extensions page (Menu -> More Tools -> Extensions, or `chrome://extensions`), and turn on Developer Mode in the top right-hand corner.
3. Add the extension using the "Load Unpacked" button.

### Firefox

1. Clone this repository or download the .zip file and unpack.
2. Go to `about:debugging` in your browser and click on "This Firefox".
3. Add the extension by pressing "Load Temporary Add-On" and choosing the file `manifest.json` in the extension directory.
