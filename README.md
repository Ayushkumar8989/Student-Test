# Student Test Admission System

A production-ready MERN stack application skeleton for a Student Test Admission management system.

## Project Structure

```
student-test-admission/
├── backend/                 # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── config/         # Configuration files (database, logger)
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # Express routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Utility functions
│   │   └── server.ts       # Application entry point
│   ├── logs/               # Application logs
│   ├── .env.example        # Environment variables template
│   └── package.json
│
├── frontend/               # React + Vite + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # API client and utilities
│   │   ├── App.tsx        # Main App component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles with Tailwind
│   ├── .env.example       # Environment variables template
│   └── package.json
│
└── package.json           # Root package.json with scripts
```

## Technology Stack

### Backend
- **Node.js** with **Express** framework
- **TypeScript** for type safety
- **MongoDB** with **Mongoose** ODM
- **Winston** for logging
- **JWT** for authentication (ready to implement)
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Compression** for response optimization

### Frontend
- **React 18** with **TypeScript**
- **Vite** for fast development and builds
- **TailwindCSS** for styling
- **React Router** for navigation
- **Axios** for API calls with interceptors

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-test-admission
```

2. Install all dependencies:
```bash
npm run install:all
```

3. Setup environment variables:

Backend (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/student_test_admission
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

Frontend (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode
Run both backend and frontend concurrently:
```bash
npm run dev
```

Or run them separately:
```bash
npm run dev:backend    # Backend on http://localhost:5000
npm run dev:frontend   # Frontend on http://localhost:5173
```

#### Production Build
```bash
npm run build          # Builds both backend and frontend
```

#### Production Mode
```bash
npm run start:backend  # Start backend
npm run start:frontend # Start frontend preview
```

## API Endpoints

### Health Check
- **GET** `/api/health` - Check server and database status

## Features Implemented

### Backend
- Production-ready server setup with TypeScript
- MongoDB connection with retry logic
- Structured logging with Winston
- Global error handling middleware
- Async handler wrapper for routes
- CORS, Helmet, and Compression middleware
- Health check endpoint
- Ready for JWT authentication implementation

### Frontend
- Modern React with TypeScript
- TailwindCSS with custom theme
- React Router setup
- Axios client with request/response interceptors
- Global layout component
- Error handling and 404 page
- Responsive design utilities
- Health check integration example

## Development Guidelines

### Backend Structure
- Place route handlers in `controllers/`
- Define database models in `models/`
- Add new routes in `routes/` and register in `routes/index.ts`
- Use `asyncHandler` wrapper for all async route handlers
- Custom middleware goes in `middleware/`
- Utility functions in `utils/`

### Frontend Structure
- Create page components in `pages/`
- Reusable components in `components/`
- API calls through `lib/apiClient.ts`
- Use TailwindCSS utility classes
- Custom styles in `index.css` using @layer

## Scripts Reference

### Root Level
- `npm run install:all` - Install all dependencies
- `npm run dev` - Run both servers in development
- `npm run build` - Build both projects
- `npm run dev:backend` - Run backend only
- `npm run dev:frontend` - Run frontend only

### Backend
- `npm run dev` - Development with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Run production build
- `npm run lint` - Lint TypeScript files
- `npm run format` - Format code with Prettier

### Frontend
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Lint TypeScript/React files

## Next Steps

This skeleton provides the foundation. You can now add:

1. **Authentication System**
   - User registration and login
   - JWT token generation and validation
   - Protected routes

2. **Database Models**
   - Student model
   - Test model
   - Admission model
   - Results model

3. **Business Logic**
   - Student CRUD operations
   - Test management
   - Admission processing
   - Results calculation

4. **Frontend Features**
   - Authentication pages
   - Student dashboard
   - Test management interface
   - Results display

## License

ISC