# ITSS2 - Project Management System 🚀

Hệ thống quản lý dự án thông minh được xây dựng với kiến trúc hiện đại, giao diện cao cấp và đầy đủ tính năng quản trị.

## 🌟 Tính năng nổi bật

- **Dashboard động**: Thống kê thời gian thực và nhắc nhở dự án sắp hết hạn.
- **Quản lý Dự án & Công việc**: Chế độ xem Board/List linh hoạt, hỗ trợ bộ lọc và sắp xếp.
- **AI Task Generator**: Tự động gợi ý các đầu việc quan trọng cho dự án mới.
- **Phân quyền Membership**: Bảo mật dữ liệu, người dùng chỉ thấy dự án mình tham gia.
- **Giao diện Premium**: Sử dụng Framer Motion cho các hiệu ứng chuyển động mượt mà.

## 🛠 Công nghệ sử dụng

- **Frontend**: React, TypeScript, Vite, Framer Motion, Lucide Icons, TailwindCSS.
- **Backend**: Node.js, Express, Prisma ORM, JWT Authentication.
- **Database**: PostgreSQL (Dockerized).

## 🚀 Hướng dẫn cài đặt và khởi chạy

### 1. Cài đặt Dependencies
Chạy lệnh sau tại thư mục gốc để cài đặt cho cả Frontend và Backend:
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 2. Thiết lập Database
Đảm bảo bạn đã cài đặt Docker, sau đó chạy script tự động:
- **Windows (PowerShell)**: `.\setup_db.ps1`
- **Bash**: `bash setup_db.sh`

Hoặc chạy thủ công:
```bash
cd backend
docker-compose up -d
npx prisma db push
npm run db:seed
```

### 3. Chạy ứng dụng
Mở 2 Terminal riêng biệt:
- **Backend**: `cd backend && npm run dev` (Chạy tại port 3001)
- **Frontend**: `cd frontend && npm run dev` (Chạy tại port 5173)

## 🔐 Tài khoản mặc định (Sau khi Seed)
- **Email**: `binh@example.com`
- **Mật khẩu**: `password123`

---
*Dự án được phát triển dựa trên mockup Figma: [Project Management App](https://www.figma.com/design/Cfilp2b8WfvRpepmM6wWNv/Project-management-app-mockup)*