# Hubs Bookmarklets
A collection of bookmarklets to aid in the use of Mozilla Hubs

## Installation
Each JS file contains the source of a bookmarklet.
To install, simply add a new bookmark to your browser and copy the contents of the JS file for the bookmarklet you want into the URL field.

## Use
After installation, click on each bookmarklet to trigger it.

Bookmarklets with "toggle" in the name will toggle the setting with each click.
Bookmarklets with "shading" in the name will set the shading to the corresponding type.
The bookmarklet `restore_shading.js` will return the shading to its original state.

**_NOTE:_** _You must use `restore_shading.js` before activating a new shading bookmarklet, as trying to activate a new shading bookmarklet while utilizing another shading bookmarklet will do nothing (this is to prevent any problems)._

## Known Issues
None currently.

## Contributing
Contributions are welcome.
Please adhere to the rule: one JS file per bookmarklet, unless discussed with me first.
If you add a new "shading" bookmarklet, make sure to update `restore_shading.js` to support it.
Make sure to include `javascript:` as the first line of any new bookmarklets you add.

**_NOTE:_** _I will always try to give credit where it is reasonably due, but if I have asked for changes to a pull request, and there has been no activity for one month, I may implement the feature/fix, etc. myself with no credit to you.  Also, if we cannot agree on a pull request, I may implement it myself and may or may not include a credit to you._

### Contributor Conduct
All contributors should adhere to the guidelines of common courtesy.  Do not make me need to write official documents on this stuff!
