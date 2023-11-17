const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Memuat konfigurasi dari file .env
dotenv.config();

const port = process.env.PORT || 3000;

// Middleware untuk menangani body dari permintaan POST
app.use(express.json());

// Route sederhana
app.get('/', (req, res) => {
  res.send('Selamat datang di Aplikasi Express sederhana!');
});

// Route dengan parameter
app.get('/api/test', (req, res) => {
  const { name } = req.params;
  res.send(`Hello!`);
});

// Route untuk menangani permintaan POST
app.post('/api/post', (req, res) => {
  const { body } = req;
  res.json({ message: 'Data diterima!', data: body });
});

// Menjalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Aplikasi Express berjalan di http://localhost:${port}`);
});
