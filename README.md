<div align="center">

# 🌿 GREENSCAPE

### Modern Landscaping Business Management System

![License](https://img.shields.io/badge/license-Proprietary-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

</div>

---

## 📋 Overview

GREENSCAPE is a comprehensive landscaping business management system designed to streamline operations, manage employee workflows, track finances, and enhance customer engagement. The platform provides an end-to-end solution for landscaping companies to manage appointments, inventory, maintenance, invoicing, and more.

## ✨ Features

### 🎯 Core Functionality
- 👥 **Employee Management**: Add, update, and manage employee records with role-based access control
- 📝 **Task & Work Assignment**: Assign and track tasks and work orders for field employees
- 📅 **Appointment Scheduling**: Manage customer appointments and service bookings
- 📦 **Inventory Management**: Track supplies, equipment, and materials
- 💰 **Financial Tracking**: Monitor transactions, invoices, and financial reports
- 🔧 **Maintenance Management**: Schedule and track equipment and property maintenance
- 💼 **Job Applications**: Process and manage career applications
- ⭐ **Customer Feedback**: Collect and analyze customer feedback with AI-powered sentiment analysis
- 🛠️ **Service Management**: Define and manage service offerings
- 📊 **Usage Tracking**: Monitor resource and equipment usage

### 🚀 Advanced Features
- 🤖 **AI Chatbot**: Intelligent customer support with natural language processing
- 📈 **Dashboard Analytics**: Real-time insights and reporting for business metrics
- 🧾 **Invoice Generation**: Automated invoice creation and management
- 🔐 **Multi-role Support**: Admin, employee, and customer portals

## 🛠️ Technology Stack

### 🔙 Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **AI/ML**: Natural Language Processing for chatbot and feedback analysis

### 🎨 Frontend
![R📁 eact](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **Framework**: React.js
- **Styling**: CSS3 with custom stylesheets
- **UI Components**: Custom-built components for optimal performance

## Project Structure

```
GREENSCAPE/
├── backend/                    # Server-side application
│   ├── controllers/           # Business logic controllers
│   ├── models/                # Database models and schemas
│   ├── routes/                # API route definitions
│   ├── uploads/               # File upload directory
│   ├── model.nlp              # NLP model for chatbot
│   ├── server.js              # Express server entry point
│   └── package.json           # Backend dependencies
│
└── frontend/                   # Client-side application
    ├── public/                # Static assets
    ├── src/
    │   ├── Components/        # Reusable React components
    │   ├── feedback/          # Feedback system components
    │   ├── finance/           # Financial management components
    │   ├── Inventory/         # Inventory management components
    │   ├── pages/             # Application pages
    │   ├── App.js             # Main application component
    │   └── index.js           # Application entry point
    └── package.json           # Frontend dependencies
```

## ⚙️ Installation

### 📋 Prerequisites
- ✅ Node.js (v14 or higher)
- ✅ MongoDB (v4.4 or higher)
- ✅ npm or yarn package manager

### 🔙 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### 🎨 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 🌐 API Endpoints

### 🔐 Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### 👥 Employees
- `GET /api/employees` - Get all employees
- `POST /api/employees` - Add new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### 📅 Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### 📦 Inventory
- `GET /api/inventory` - Get inventory items
- `POST /api/inventory` - Add inventory item
- `PUT /api/inventory/:id` - Update inventory item
- `DELETE /api/inventory/:id` - Remove inventory item

### 💰 Financial Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/summary` - Get financial summary

### 📝 Tasks & Work Orders
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `GET /api/work` - Get work orders
- `POST /api/work` - Create work order

### ⭐ Feedback
- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/analytics` - Get feedback analytics

_For complete API documentation, refer to the individual route files in `backend/routes/`_

## 💡 Usage

### 👨‍💼 Admin Dashboard
1. 🔑 Log in with admin credentials
2. 📊 Access the admin dashboard to view business metrics
3. 🛠️ Manage employees, inventory, and services
4. 📈 Review financial reports and analytics

### 👷 Employee Portal
1. 🔑 Log in with employee credentials
2. 📋 View assigned tasks and work orders
3. ✅ Update task status and progress
4. ⏱️ Submit time and usage reports

### 🧑‍🤝‍🧑 Customer Interface
1. 🔍 Browse available services
2. 📅 Book appointments
3. ⭐ Submit feedback and reviews
4. 💼 Apply for career opportunities

## 🤝 Contributing

We welcome contributions to GREENSCAPE! Please follow these steps:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- 🚀 Built with modern web technologies for optimal performance
- 🎨 Designed with user experience and business efficiency in mind
- 🔄 Continuously updated with new features and improvements

---

<div align="center">

**Made with 💚 for the landscaping industry**

⭐ Star this repo if you find it helpful!

</div>
