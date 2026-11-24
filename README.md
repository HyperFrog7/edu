# Proxy Pursuit - CDN build

Everything here is addressed relative to this folder, so it runs from any
directory. Serve it from a static host, or push the folder to a repository and
use a jsDelivr path.

	https://cdn.jsdelivr.net/gh/<owner>/<repo>@<tag>/index.svg

jsDelivr types .html as text/plain, so index.svg is the entry point: an SVG
document holds the XHTML app in a <foreignObject>. index.xml is the same app
without the wrapper, for anything that prefers XML.

The app loads as a classic script from ./assets. Chrome runs no module script
in an XML document, which is why the CDN build is one IIFE bundle.

Pin a tag or a commit rather than a branch: a floating ref changes under a
service worker that is already installed, and the two will disagree about which
files exist.

Rebuild with *pnpm build:cdn*.
