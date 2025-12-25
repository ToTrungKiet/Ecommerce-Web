# Website Thương Mại Điện Tử (E-commerce Website)

## 🚀 Giới thiệu

Đây là project Website Thương Mại Điện Tử nhằm mô phỏng một hệ thống bán hàng online hoàn chỉnh với các chức năng cơ bản của một website e-commerce hiện đại.

Hệ thống bao gồm **3 phần chính**:

- **User (Khách hàng):** Trải nghiệm mua sắm và đặt hàng
- **Admin:** Quản lý sản phẩm, đơn hàng và người dùng
- **Backend (API):** Xử lý nghiệp vụ và xác thực hệ thống

---

## ⚙️ Chức năng chính

### 🛒 Trang Người Dùng (Frontend)

- 📝 Đăng ký / Đăng nhập
- 🛍️ Xem danh sách sản phẩm
- 🔍 Xem chi tiết sản phẩm
- 🛒 Thêm sản phẩm vào giỏ hàng
- 💳 Đặt hàng
- 📦 Theo dõi đơn hàng
- 👤 Quản lý thông tin cá nhân

---

### 👨‍💻 Trang Quản Trị (Admin Panel)

- 🔐 Đăng nhập Admin (JWT Authentication)
- ➕ Thêm / Sửa / Xóa sản phẩm
- 📋 Quản lý danh sách sản phẩm
- 📦 Quản lý đơn hàng
- 👥 Quản lý người dùng
- 📊 Dashboard thống kê cơ bản

---

### ⚙️ Backend (API Server)

- RESTful API cho frontend và admin
- Xác thực và phân quyền bằng JWT
- Quản lý người dùng, sản phẩm và đơn hàng
- Kết nối cơ sở dữ liệu

---

## 🛠️ Công nghệ sử dụng

- **Frontend:** ReactJS, Vite, TailwindCSS
- **Admin Panel:** ReactJS, Vite, TailwindCSS
- **Backend:** Node.js, ExpressJS, JWT, dotenv
- **Database:** MongoDB (Mongoose)

---

## 📂 Cấu trúc thư mục

### 📦 Ecommerce-Web

- 📂 **frontend** – Giao diện người dùng (React + Vite)
  - 📂 src
  - 📂 public
  - 📂 dist
  - 📜 package.json
  - 📜 vite.config.js

- 📂 **backend** – Server & API (Node.js + Express)
  - 📂 controllers
  - 📂 models
  - 📂 routes
  - 📂 middleware
  - 📂 config
  - 📜 server.js
  - 📜 package.json
  - 📜 .env

- 📂 **admin** – Trang quản trị (Admin Panel)
  - 📂 src
  - 📂 public
  - 📜 package.json
  - 📜 vite.config.js
  - 📜 .env

- 📜 .gitignore
- 📜 README.md


 ---

## 🌐 Triển khai (Deploy)

- **Frontend:** Render (Static Site)
- **Admin Panel:** Render (Static Site)
- **Backend:** Render (Web Service)
- **Database:** MongoDB Atlas

---

## 👤 Tác giả

- **Tô Trung Kiệt**
