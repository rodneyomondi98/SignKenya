# SignKenya - MERN Stack Digital Signature Platform

A full-stack digital signature application built with the MERN stack (MongoDB, Express.js, React, Node.js) and managed with pnpm workspaces.

## 🚀 Features

- **Digital Signatures**: Create and sign documents electronically
- **User Authentication**: Secure JWT-based authentication
- **Document Management**: Upload, view, and manage documents
- **Real-time Status**: Track document signing status
- **Responsive Design**: Works on desktop and mobile devices
- **Security**: Rate limiting, helmet protection, and secure headers

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Query** for data fetching
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Express Rate Limit** for API protection

### Development Tools
- **pnpm** workspaces for monorepo management
- **TypeScript** for type safety
- **ESLint** for code linting
- **Concurrently** for running multiple processes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher)
- **MongoDB** (local installation or MongoDB Atlas)

### Installing pnpm

If you don't have pnpm installed, you can install it globally:

```bash
npm install -g pnpm
```

Or using npm:
```bash
npm install -g pnpm@latest
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd signkenya
   ```

2. **Install dependencies**
   ```bash
   pnpm install:all
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit the .env file with your configuration
   nano .env
   ```

4. **Configure Environment Variables**
   
   Update the `.env` file with your settings:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/signkenya
   JWT_SECRET=your-super-secure-jwt-secret-key-here
   CLIENT_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # If using local MongoDB
   mongod
   
   # Or if using MongoDB service
   sudo systemctl start mongod
   ```

6. **Run the application**
   ```bash
   # Start both client and server in development mode
   pnpm dev
   ```

   The application will be available at:
   - **Frontend**: http://localhost:3000
   - **Backend**: http://localhost:5000

## 📁 Project Structure

```
signkenya/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database and configuration
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── README.md
```

## 🔧 Available Scripts

### Root Level Scripts
```bash
# Install all dependencies
pnpm install:all

# Start both client and server in development
pnpm dev

# Build the client for production
pnpm build

# Start the production server
pnpm start

# Clean all node_modules and build artifacts
pnpm clean

# Run linting on both client and server
pnpm lint
```

### Client Scripts
```bash
# Start client development server
pnpm client:dev

# Build client for production
pnpm client:build

# Preview production build
pnpm client:preview
```

### Server Scripts
```bash
# Start server in development mode
pnpm server:dev

# Start production server
pnpm server:start
```

## 🗄️ Database Setup

### Using Local MongoDB

1. **Install MongoDB** on your system
2. **Start MongoDB** service
3. **Update** the `MONGODB_URI` in your `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/signkenya
   ```

### Using MongoDB Atlas (Cloud)

1. **Create** a MongoDB Atlas account
2. **Create** a new cluster
3. **Get** your connection string
4. **Update** the `MONGODB_URI` in your `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/signkenya
   ```

## 🔐 Authentication

The application uses JWT-based authentication:

- **Registration**: Create a new user account
- **Login**: Authenticate with email and password
- **Protected Routes**: Access control for authenticated users
- **Token Expiry**: 7-day token expiration

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Documents
- `GET /api/documents` - Get user documents
- `GET /api/documents/:id` - Get single document
- `POST /api/documents` - Create new document
- `POST /api/documents/:id/sign` - Sign a document

## 🚀 Deployment

### Production Build

```bash
# Build the client
pnpm client:build

# The built files will be in client/dist/
```

### Environment Variables for Production

Make sure to set these environment variables in production:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
CLIENT_URL=https://your-domain.com
```

## 🧪 Development

### Adding New Dependencies

```bash
# Add to client
pnpm --filter client add package-name

# Add to server
pnpm --filter server add package-name

# Add to root (development dependencies)
pnpm add -D package-name
```

### Code Quality

The project includes ESLint configuration for both client and server:

```bash
# Run linting
pnpm lint

# Fix linting issues
pnpm --filter client lint --fix
pnpm --filter server lint --fix
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

## 🙏 Acknowledgments

- **MERN Stack** community
- **pnpm** for excellent monorepo support
- **Vite** for blazing fast development
- **Tailwind CSS** for utility-first styling