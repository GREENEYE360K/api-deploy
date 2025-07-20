# Simple Node.js API

A lightweight, production-ready Node.js Express API designed for easy deployment on Heroku and other cloud platforms.

## 🚀 Features

- **Express.js Framework** - Fast, unopinionated web framework for Node.js
- **CORS Support** - Cross-Origin Resource Sharing enabled for all routes
- **JSON Parsing** - Built-in JSON request body parsing
- **Environment Configuration** - Flexible port configuration via environment variables
- **Heroku Ready** - Optimized for Heroku deployment with proper engine specification
- **Development Tools** - Hot reload with nodemon for development
- **Sample Endpoints** - Ready-to-use REST API endpoints for demonstration

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 18.x recommended)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GREENEYE360K/api-deploy.git
   cd api-deploy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Usage

### Development Mode
Start the server with hot reload (automatically restarts on file changes):
```bash
npm run dev
```

### Production Mode
Start the server for production:
```bash
npm start
```

The API will be available at:
- **Local**: `http://localhost:3000`
- **Heroku**: Your app's Heroku URL

## 📡 API Endpoints

### Root Endpoint
- **GET** `/`
  - **Description**: Welcome message and API status
  - **Response**: 
    ```json
    {
      "message": "Welcome to your simple Node.js API!",
      "status": "API is running"
    }
    ```

### Items Endpoints

#### Get All Items
- **GET** `/api/items`
  - **Description**: Retrieve a list of sample items
  - **Response**:
    ```json
    [
      { "id": 1, "name": "Item 1" },
      { "id": 2, "name": "Item 2" },
      { "id": 3, "name": "Item 3" }
    ]
    ```

#### Create New Item
- **POST** `/api/items`
  - **Description**: Create a new item
  - **Request Body**:
    ```json
    {
      "name": "New Item",
      "description": "Item description"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Item created successfully",
      "item": {
        "name": "New Item",
        "description": "Item description"
      }
    }
    ```

### Example API Requests

Using cURL:
```bash
# Get API status
curl http://localhost:3000/

# Get all items
curl http://localhost:3000/api/items

# Create a new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "My Item", "description": "A sample item"}'
```

## ⚙️ Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |

Create a `.env` file in the root directory for local development:
```env
PORT=3000
```

## 🚀 Deployment

### Heroku Deployment

1. **Install Heroku CLI** (if not already installed)
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create a new Heroku app**
   ```bash
   heroku create your-app-name
   ```

4. **Deploy to Heroku**
   ```bash
   git push heroku main
   ```

5. **Open your deployed app**
   ```bash
   heroku open
   ```

### Other Cloud Platforms

This API can be deployed on any platform that supports Node.js:
- **Vercel**: Connect your GitHub repository
- **Railway**: Deploy with one click
- **Render**: Connect your repository
- **DigitalOcean App Platform**: Deploy from GitHub

## 🏗️ Project Structure

```
api-deploy/
├── index.js          # Main application file
├── package.json      # Project dependencies and scripts
├── package-lock.json # Dependency lock file
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

## 🛠️ Development

### Available Scripts

```bash
# Start the application in production mode
npm start

# Start the application in development mode with hot reload
npm run dev

# Install dependencies
npm install
```

### Adding New Features

1. **New Routes**: Add routes in `index.js`
2. **Middleware**: Add Express middleware as needed
3. **Environment Variables**: Add to `.env` file and update documentation

### Code Style

- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Add comments for complex logic
- Keep functions small and focused

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add your commit message"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the package.json file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/GREENEYE360K/api-deploy/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your environment and the issue

## 🔗 Useful Links

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Heroku Node.js Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [npm Documentation](https://docs.npmjs.com/)

---

Made with ❤️ for the developer community