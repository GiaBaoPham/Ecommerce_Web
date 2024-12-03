const express = require('express'); // Import Express
const router = express.Router();   // Khởi tạo Router

// Định nghĩa route cho trang chủ
router.get('/', (req, res) => {
    const products = [
        { name: "AK-900 Wired Keyboard", image: "/images/banphim_1.jpg", discount: 35, newPrice: 960, oldPrice: 1160 },
        { name: "Gaming Mouse X300", image: "/images/mouse_1.jpg", discount: 20, newPrice: 480, oldPrice: 600 },
        { name: "UltraWide Monitor 34\"", image: "/images/screen_1.jpg", discount: 15, newPrice: 3400, oldPrice: 4000 },
        { name: "Noise Cancelling Headphones", image: "/images/headphones_1.jpg", discount: 25, newPrice: 750, oldPrice: 1000 }
    ];
    res.render('homepage', { pageTitle: "Homepage", products });
});

// Export router để sử dụng trong app.js
module.exports = router;
