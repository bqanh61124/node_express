const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// Enable CORS for requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middleware to parse JSON (if needed)
app.use(express.json());

// Hardcoded blog posts
const blogPosts = [
  {
    id: 1,
    slug: "install-vscode",
    title: "Cách cài đặt Visual Studio Code",
    description:
      "Hướng dẫn từng bước để cài đặt Visual Studio Code trên máy tính.",
    content:
      "Bước 1: Truy cập trang web chính thức của Visual Studio Code.\nBước 2: Tải xuống phiên bản phù hợp với hệ điều hành của bạn.\nBước 3: Chạy file cài đặt và làm theo hướng dẫn trên màn hình.\nBước 4: Khởi động Visual Studio Code sau khi cài đặt hoàn tất.",
  },
  {
    id: 2,
    slug: "write-html",
    title: "Cách viết một đoạn mã HTML đơn giản",
    description: "Học cách tạo một trang web cơ bản với HTML.",
    content:
      "Bước 1: Mở trình soạn thảo văn bản (như Notepad hoặc Visual Studio Code).\nBước 2: Viết mã HTML cơ bản, bao gồm thẻ <html>, <head>, và <body>.\nBước 3: Thêm các phần tử như tiêu đề, đoạn văn, và hình ảnh.\nBước 4: Lưu file với phần mở rộng .html và mở trong trình duyệt để xem kết quả.",
  },
];

// API to get list of blogs
app.get("/blogs", (req, res) => {
  res.json(blogPosts);
});

// API to get blog details by slug
app.get("/blogs/:slug", (req, res) => {
  const slug = req.params.slug;
  const post = blogPosts.find((blog) => blog.slug === slug);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Blog post not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
