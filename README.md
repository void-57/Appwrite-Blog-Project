# Appwrite Blog Project

This project is a **blogging platform** built using modern web development technologies. It leverages **Appwrite** for backend services, providing user authentication, database management, and file storage. The platform is designed for simplicity and scalability, allowing users to sign up, log in, and manage blog posts effortlessly.

---

## 🚀 Features

### User Features
- **User Authentication**:
  - Register with an email and password.
  - Secure login and logout functionality.
- **Blog Management**:
  - Create and publish new blog posts.
  - Edit existing blog posts.
  - View published blog posts in a clean and responsive UI.

### Admin Features
- Manage all blog posts created by users.
- Delete or edit inappropriate or invalid blog posts.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI framework for building dynamic interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Router**: For seamless navigation and routing.

### Backend
- **Appwrite**:
  - **Authentication**: Handles user signup, login, and session management.
  - **Database**: Stores and retrieves blog post data using Appwrite's Document Database.
  - **Storage**: Manages file uploads (e.g., images for blogs).

### State Management
- **Redux**: Manages global application state, including user authentication and blog data.

---

## 📂 Project Structure

```plaintext
Appwrite-Blog-Project/
├── src/                      # Source code
│   ├── appwrite/             # Appwrite API service wrappers
│   ├── assets/               # Static resources like images and icons
│   ├── components/           # Reusable UI components
│   ├── config/               # App configuration and constants
│   ├── store/                # Redux slices for global state management
│   ├── App.css               # Global CSS for the application
│   ├── App.jsx               # Main application component
│   ├── index.css             # Styles for the application entry point
│   ├── main.jsx              # Main entry file for rendering the app
├── .env.sample               # Sample environment configuration
├── .gitignore                # Files and directories to ignore in git
├── README.md                 # Project documentation
├── eslint.config.js          # ESLint configuration for code linting
├── index.html                # Main HTML template
├── package-lock.json         # Lockfile for dependencies
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite build configuration
```

## 🛠️ Setup and Installation

Follow these steps to set up and run the project locally.

---

### Prerequisites

Before you begin, ensure you have the following installed and set up:

- **Node.js**: Version 16 or higher is recommended. Download it from [Node.js Official Site](https://nodejs.org/).
- **Appwrite Server**: Install and configure an Appwrite instance. Refer to the [Appwrite Documentation](https://appwrite.io/docs) for setup details.
- **Appwrite Project**:
  - Create a new project in your Appwrite console.
  - Set up the required services:
    - **Authentication**: Enable email/password-based authentication.
    - **Database**: Create a database and a collection for storing blog data.
    - **Storage**: Set up a bucket to store files like blog images.
- **TinyMCE API Key**: Obtain an API key from [TinyMCE](https://www.tiny.cloud/) to enable rich text editing.

---

### Installation Steps

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:
   
```bash
   git clone https://github.com/void-57/Appwrite-Blog-Project.git
   cd Appwrite-Blog-Project
```

2. **Install Dependencies**:
    Navigate to the project directory and install all required dependencies:
   
```bash
   npm i
```

3. Configure Environment Variables
   * Create a .env file in the root directory of the project
   * Add the following variables, replacing <placeholders> with your actual Appwrite and TinyMCE configurations:

  
```env
  VITE_APPWRITE_URL="<Your Appwrite Endpoint>"
  VITE_APPWRITE_PROJECT_ID="<Your Appwrite Project ID>"
  VITE_APPWRITE_DATABASE_ID="<Your Appwrite Database ID>"
  VITE_APPWRITE_COLLECTION_ID="<Your Appwrite Collection ID>"
  VITE_APPWRITE_BUCKET_ID="<Your Appwrite Bucket ID>"
  VITE_TINYMCE="<Your TinyMCE API Key>"
```
---

## Steps to Run and Deploy the Application

### 1. Start the Development Server

To start the local development server and run the application, use the following command:

```bash
npm run dev
```

### 2. Access the Application: After starting the development server, open your browser and navigate to:

```bash
http://localhost:5173
```
This will allow you to view and interact with the application locally.


