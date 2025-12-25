Website Thương Mại Điện Tử (E-commerce Website)
🚀 Giới thiệu

Đây là project Website Thương Mại Điện Tử nhằm mô phỏng một hệ thống bán hàng online hoàn chỉnh với đầy đủ các chức năng cơ bản của một website e-commerce hiện đại.

Hệ thống được chia thành 3 phần chính:

User (Khách hàng): Trải nghiệm mua sắm, xem sản phẩm, đặt hàng.

Admin: Quản lý sản phẩm, đơn hàng và hệ thống.

Backend (API): Xử lý nghiệp vụ, xác thực, và kết nối cơ sở dữ liệu.

⚙️ Chức năng chính
🛒 Trang Người Dùng (Frontend)

📝 Đăng ký / Đăng nhập tài khoản người dùng

🛍️ Xem danh sách sản phẩm

🔍 Xem chi tiết sản phẩm

🛒 Thêm sản phẩm vào giỏ hàng

💳 Đặt hàng

📦 Theo dõi trạng thái đơn hàng

👤 Quản lý thông tin cá nhân

👨‍💻 Trang Quản Trị (Admin Panel)

🔐 Đăng nhập Admin (xác thực bằng JWT)

➕ Thêm / Sửa / Xóa sản phẩm

📋 Quản lý danh sách sản phẩm

📦 Quản lý đơn hàng

👥 Quản lý người dùng

📊 Dashboard (thống kê cơ bản)

⚙️ Backend (API Server)

RESTful API cho frontend và admin

Xác thực & phân quyền bằng JWT

Quản lý:

Người dùng

Sản phẩm

Đơn hàng

Kết nối cơ sở dữ liệu

Cấu hình biến môi trường (.env)

🛠️ Công nghệ sử dụng
Frontend (User)

ReactJS

Vite

TailwindCSS

Axios

Admin Panel

ReactJS

Vite

TailwindCSS

Axios

JWT Authentication

Backend

Node.js

ExpressJS

JSON Web Token (JWT)

dotenv

REST API

Cơ sở dữ liệu

MongoDB (Mongoose)

📦 Ecommerce-Web
 ┣ 📂 frontend        # Giao diện người dùng (React + Vite)
 ┃ ┣ 📂 src
 ┃ ┣ 📂 public
 ┃ ┣ 📂 dist
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 vite.config.js
 ┣
 ┣ 📂 backend         # Server & API (Node.js + Express)
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middleware
 ┃ ┣ 📂 config
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 .env
 ┣
 ┣ 📂 admin           # Trang quản trị (Admin Panel)
 ┃ ┣ 📂 src
 ┃ ┣ 📂 public
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 vite.config.js
 ┃ ┗ 📜 .env
 ┣
 ┣ 📜 .gitignore
 ┗ 📜 README.md

🌐 Triển khai (Deploy)

Frontend: Render (Static Site)

Admin Panel: Render (Static Site)

Backend: Render (Web Service)

Database: MongoDB Atlas

👤 Tác giả

Tô Trung Kiệt

📌 Ghi chú

Project được xây dựng với mục tiêu học tập và thực hành full-stack

Tập trung vào:

Luồng frontend – backend

Xác thực JWT

Deploy thực tế trên Render
