import index from "./public/index.html";

const API_TARGET = "https://your-cors-sensitive-api.io/api";

// Proxy to dodge CORS hassle from localhost (remove or tweak to your liking)
async function proxyApi(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/api/, "") + url.search;
  const headers = new Headers(req.headers);
  headers.delete("host");
  console.log("[api-forward req] →", req.method, path);
  const res = await fetch(API_TARGET + path, {
    method: req.method,
    headers,
    body: req.body,
    redirect: "manual",
  });
  console.log("[api-forward res] ←", res.status, path);
  return res;
}

const server = Bun.serve({
  port: 1337,
  development: {
    hmr: false, // handled by elm-watch
  },
  routes: {
    "/api/*": proxyApi,
    "/*": index,
  },
});

console.log(`dev server running: ${server.url}`);
