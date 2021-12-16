# scholar-cited-by-link

A Google Chrome / Firefox extension that restores the clickable "Cited by" links in Google search results. 

Note: the link does not take you directly to the paper's actual "cited by" list, as the address of this page is not provided by Google in the search results. Instead, it makes a search on Google Scholar using the names of the authors + the title of the relevant page. The page titles are not always "clean" in the sense that they sometimes have journal titles / publisher info / other random crap attached at the end. There does not appear to be a good way to extract just the title of the paper, but the search on Google Scholar seems to handle it well anyway.

Please treat this as an early version and report cases where it doesn't work properly.

## Installation instructions

Tested on Chrome 95.0 and Firefox 88.0.

### Chrome

1. Clone this repository or download the .zip file and unpack.
2. Open the Chrome extensions page (Menu -> More Tools -> Extensions, or `chrome://extensions`), and turn on Developer Mode in the top right-hand corner.
3. Add the extension using the "Load Unpacked" button.

### Firefox

Technically, Firefox doesn't allow you to install unsigned extensions unless you have a developer version of the browser, but you can do the following:

1. Clone this repository or download the .zip file and unpack.
2. Go to `about:debugging` in your browser and click on "This Firefox".
3. Add the extension by pressing "Load Temporary Add-On" and choosing the file `manifest.json` in the extension directory.