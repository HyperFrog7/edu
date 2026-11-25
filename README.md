# ITCode

Tutorials about programming, web development, networking, and the parts of the
internet that usually stay invisible: DNS, TCP, HTTP, TLS, WebSockets.

Pages:

	index.html    the front page
	study/        twenty tutorials, one per topic
	404.html      not found
	index.svg     the same site as one document
	index.xml     the same site as one document, XML flavour

The site is plain HTML with inline styles. No build step, no JavaScript
framework, no network calls: open index.html or serve the folder.

index.svg and index.xml each carry the whole site in one document: every page
is embedded, links between pages are hash routes, and the page you land on is
rendered in an iframe so each page keeps its own stylesheet. Use one of those
when a folder is inconvenient - a jsDelivr path, a single-file upload, an
email attachment.

## Workspace

`sandbox/` is the interactive workspace for the exercises. Its entry point is
sandbox/index.svg, because most static hosts type .html as text/plain. Serve
this folder from any directory - a static host, a repository path, or a
jsDelivr path:

	https://cdn.jsdelivr.net/gh/<owner>/<repo>@<tag>/sandbox/index.svg

Inside the sandbox:

	assets/       the workspace bundle
	courseware/   the reading engine and its study settings
	faculty/      the session layer: routing, storage, notes
	readers/      the network reader that fetches lesson material
	handbook/     the alternate reader, for material the first cannot open
	icons/        shortcut artwork

Pin a tag or a commit rather than a branch: a floating ref changes under a
service worker that is already installed, and the two will disagree about which
files exist.

Rebuild with *pnpm build:cdn*.
