<div align="center">

# 🌿 GREENSCAPE

<div align="center">

# 🏢 Employee Management & Job Application System

### A Modern Full-Stack HR Management Solution

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

</div>

---

## 📖 Project Overview

A comprehensive full-stack web application designed to streamline human resource management operations. This system provides an integrated platform for managing employees, job postings, applications, task assignments, and work allocation. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the application delivers a modern, responsive, and scalable solution for organizations to efficiently handle their HR operations.

### 🎯 Key Objectives

- **Centralized Management**: Single platform for all HR-related activities
- **Process Automation**: Streamline employee onboarding, task assignment, and work tracking
- **Real-time Updates**: Instant synchronization across all modules
- **User-Friendly Interface**: Intuitive design for enhanced user experience
- **Scalable Architecture**: Built to grow with your organization's needs

## ✨ Features

<table>
<tr>
<td width="50%">

### 👥 Employee Management
- ➕ Add, view, update, and manage employee records
- 📊 Employee dashboard with comprehensive information
- 🔐 Role-based access control
- 📝 Complete employee lifecycle management

</td>
<td width="50%">

### 💼 Job Management
- 📢 Create and manage job postings
- 🌐 Display available positions on career page
- 📋 Job application tracking system
- ✅ Application status monitoring

</td>
</tr>
<tr>
<td width="50%">

### ✅ Task Management
- 📌 Assign tasks to employees
- 📈 Track task status and progress
- 🔄 Update and manage task workflows
- ⏰ Task prioritization and deadlines

</td>
<td width="50%">

### 💻 Work Assignment
- 🎯 Allocate work to team members
- 👀 Monitor work completion
- 📊 Update work status
- 📑 Workload distribution tracking

</td>
</tr>
</table>

### 🎛️ Admin Panel
- 🖥️ Centralized administration dashboard
- 👨‍💼 User management capabilities
- 📡 System-wide monitoring
- 📊 Analytics and reporting

## 🚀 Technology Stack

<div align="center">

### Frontend Technologies

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</p>

| Technology | Version | Purpose |
|------------|---------|---------|
| ⚛️ **React** | 18.x | Component-based UI library for building dynamic user interfaces |
| 🛣️ **React Router** | 6.x | Declarative routing for React applications |
| 🎨 **CSS3** | - | Modern styling with flexbox, grid, and animations |
| 📡 **Axios** | 1.x | Promise-based HTTP client for API communication |

### 🖥️ Backend Technologies

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
</p>

| Technology | Version | Purpose |
|------------|---------|---------|
| 🟢 **Node.js** | 14+ | JavaScript runtime for server-side execution |
| 🚂 **Express.js** | 4.x | Minimalist web framework for building RESTful APIs |
| 🍃 **MongoDB** | 4+ | NoSQL database for flexible data storage |
| 🔗 **Mongoose** | 6.x | Elegant MongoDB object modeling with schema validation |
| 📤 **Multer** | 1.x | Middleware for handling multipart/form-data (file uploads) |

</div>

---

## 🏗️ System Architecture

<div align="center">

### Architecture Pattern: MVC (Model-View-Controller)

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│                    (React Application)                       │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ HTTP/HTTPS Requests
                        │ (REST API)
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│                   (Express.js Routes)                        │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │Employee  │   Job    │  Task    │  Work    │  App     │  │
│  │ Routes   │  Routes  │  Routes  │  Routes  │  Routes  │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                      BUSINESS LOGIC LAYER                    │
│                      (Controllers)                           │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │Employee  │   Job    │  Task    │  Work    │JobApp    │  │
│  │Controller│Controller│Controller│Controller│Controller│  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATA ACCESS LAYER                      │
│                    (Mongoose Models)                         │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │Employee  │   Job    │  Task    │  Work    │JobApp    │  │
│  │  Model   │  Model   │  Model   │  Model   │  Model   │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATABASE LAYER                         │
│                      (MongoDB Atlas)                         │
│            Collections: employees, jobs, tasks,              │
│                  work, jobApplications                       │
└─────────────────────────────────────────────────────────────┘
```

</div>

### 📐 Architecture Components

#### 🎨 Frontend Architecture
```
frontend/
├── Components/              # React Components
│   ├── AddEmployee.js      # Employee form component
│   ├── AllEmployee.js      # Employee list component
│   ├── Adminpage.js        # Admin dashboard
│   ├── TaskAssign.js       # Task management
│   ├── WorkAssign.js       # Work allocation
│   └── CareerPage.js       # Public job listings
├── App.js                  # Root component & routing
└── index.js                # Application entry point
```

#### 🖥️ Backend Architecture
```
BACKEND/
├── models/                 # Data schemas
│   ├── Employee.js        # Employee schema
│   ├── job.js            # Job schema
│   ├── Task.js           # Task schema
│   ├── Work.js           # Work schema
│   └── jobApplication.js # Application schema
├── controllers/           # Business logic
│   ├── employeeController.js
│   ├── jobsController.js
│   ├── taskController.js
│   └── workController.js
├── routes/               # API endpoints
│   ├── employee.js
│   ├── jobs.js
│   ├── taskRoutes.js
│   └── work.js
└── server.js            # Express server configuration
```

### 🔄 Data Flow

1. **Client Request** → User interacts with React components
2. **API Call** → Axios sends HTTP request to Express server
3. **Routing** → Express router directs request to appropriate controller
4. **Business Logic** → Controller processes request and validates data
5. **Database Operation** → Mongoose performs CRUD operations on MongoDB
6. **Response** → Data flows back through layers to the client
7. **UI Update** → React re-renders components with new data

### 🔐 Security Features

- 🛡️ Input validation and sanitization
- 🔒 Secure file upload handling
- 🌐 CORS configuration
- 📝 Error handling middleware
- 🔑 Environment variable protection

### 📊 Key Design Patterns

- **MVC Pattern**: Separation of concerns across Model-View-Controller
- **RESTful API**: Standard HTTP methods for CRUD operations
- **Component-Based**: Reusable React components
- **Modular Structure**: Clear separation of routes, controllers, and models
- **Single Responsibility**: Each module handles one specific feature

---


