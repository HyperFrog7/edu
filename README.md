# Pr0xy Pursuit

An open study workspace. Lessons, readings and reference material open in one
tab, and the workspace keeps its own notes, history and layout between visits.

Everything here is addressed relative to this folder, so it runs from any
directory. Serve it from a static host, or push the folder to a repository and
use a jsDelivr path:

	https://cdn.jsdelivr.net/gh/<owner>/<repo>@<tag>/index.svg

Most hosts type .html as text/plain, so index.svg is the entry point: an SVG
document holds the XHTML workspace in a <foreignObject>. index.xml is the same
document without the wrapper, for anything that prefers XML.

The workspace loads as a classic script from ./assets. Chrome runs no module
script in an XML document, which is why this build ships one bundle.

Folders:

	courseware/   the reading engine and its study settings
	faculty/      the session layer: routing, storage, notes
	readers/      the network reader that fetches lesson material
	handbook/     the alternate reader, for material the first cannot open
	icons/        shortcut artwork

Pin a tag or a commit rather than a branch: a floating ref changes under a
service worker that is already installed, and the two will disagree about which
files exist.

Rebuild with *pnpm build:cdn*.
