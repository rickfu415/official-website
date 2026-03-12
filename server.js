const express = require("express");
const path = require("path");
const app = express();

// 添加基本的错误处理中间件
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});

// 添加请求日志中间件
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// 静态文件服务
const staticPath = path.join(__dirname, "client/dist");
console.log("Serving static files from:", staticPath);
app.use(express.static(staticPath));

// 提供 temp_pages 目录中的 HTML 文件
const tempPagesPath = path.join(__dirname, "client/src/pages/temp_pages");
app.use("/temp_pages", express.static(tempPagesPath));

// 所有路由都返回 index.html
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "client/dist/index.html");
  console.log("Serving index.html from:", indexPath);
  res.sendFile(indexPath);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started at ${new Date().toISOString()}`);
  console.log(`Foooodis is running on port ${PORT}`);
  console.log(`Current directory: ${__dirname}`);
});

// 处理未捕获的异常
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
