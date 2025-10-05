//server.js
const express = require("express");
const app = express();
const port = 8001;

app.use('/images', express.static('images'));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const articles = [
  {
    id: 1,
    title: "Belajar Express.js untuk Pemula",
    urlimage: "http://localhost:8001/images/Sam.png",
    description: "Express.js adalah salah satu framework Node.js yang ringan dan fleksibel untuk membangun aplikasi web maupun API. Dengan sintaks yang sederhana, Express.js cocok untuk pemula.",
    author: "Raden Walangsungsang",
  },
  {
    id: 2,
    title: "Membuat API dengan Node.js",
    urlimage: "http://localhost:8001/images/Xiao.jpeg",
    description: "Untuk membuat API sederhana dengan Node.js dan Express, langkah pertama adalah memastikan Node.js sudah terpasang di komputer. Selanjutnya, instal Express dan buat endpoint sesuai kebutuhan.",
    author: "Empu Gandring",
  },
];

// Endpoint GET /api/test/getarticle
app.get("/api/test/getarticle", (req, res) => {
  res.json({
    status: "success",
    data: articles
  });
});