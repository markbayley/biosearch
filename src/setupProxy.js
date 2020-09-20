const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      // TODO: make this configurable somhew? env var? other setting?
      // target: "http://localhost:5000",
      target: "https://ecoimages-test.tern.org.au",
      changeOrigin: true,
    }),
  );
};
