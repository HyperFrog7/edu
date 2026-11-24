importScripts("controller.sw.js");
addEventListener("fetch", (event) => {
	if ($ramjetController.shouldRoute(event)) {
		event.respondWith($ramjetController.route(event));
	}
});
