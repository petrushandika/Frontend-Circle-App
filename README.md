# Frontend Circle App

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Additional Setup](#additional-setup)
- [Conclusion](#conclusion)

## Introduction

This project is a frontend application built using Vite and React. It includes Chakra UI for styling, React Router for navigation, React Icons for icons, and React Hook Form for form handling.

## Installation

Follow these steps to set up the project on your local machine.

### 1. Create a New Vite Project and Set Up Directory

First, create a new Vite project and set up the directory structure.

```sh
npm create vite@latest
npx degit user/project#main my-project
cd my-project
```

### 2. Install Initial Dependencies

Install the initial dependencies required for the project.

```sh
npm install
```

### 3. Run the Development Server

Run the development server to ensure everything is set up correctly.

```sh
npm run dev
```

### 4. Install Chakra UI and Related Dependencies

Install Chakra UI and related dependencies for styling.

```sh
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### 5. Set Up Chakra UI in Your Application

Wrap your application with the `ChakraProvider` component to use Chakra UI components.

In `src/App.jsx` or `src/App.tsx`:

```jsx
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  );
}

export default App;
```

### 6. Install React Router

Install React Router for navigation.

```sh
npm install react-router-dom
```

### 7. Install React Icons

Install React Icons for using icons in your project.

```sh
npm install react-icons
```

### 8. Install React Hook Form

Install React Hook Form for form handling.

```sh
npm install react-hook-form
```

## Project Structure

A typical project structure might look like this:

```plaintext
my-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   └── MyComponent.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── styles/
│       └── global.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Usage

### Starting the Development Server

To start the development server, run:

```sh
npm run dev
```

### Developing Components and Pages

#### 1. Use Chakra UI for UI Components

Import Chakra UI components and use them to build the user interface. Example:

```jsx
import { Box, Button } from '@chakra-ui/react';

function MyComponent() {
  return (
    <Box>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
  );
}

export default MyComponent;
```

#### 2. Define Routes with React Router

Set up your routes in `src/App.jsx` or `src/App.tsx`:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
```

#### 3. Use React Hook Form for Form Handling

Example of a form component using React Hook Form:

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <span>Name is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

#### 4. Integrate Icons with React Icons

Example of using an icon from React Icons:

```jsx
import { FaBeer } from 'react-icons/fa';

function IconExample() {
  return (
    <div>
      <h3> Let's go for a <FaBeer />? </h3>
    </div>
  );
}

export default IconExample;
```

## Additional Setup

### Setting Up Global Styles

You can set up global styles by creating a CSS file in the `src/styles` directory and importing it into your `src/index.jsx` file. For example:

Create `src/styles/global.css`:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

Import it in `src/index.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Environment Variables

Create a `.env` file at the root of your project to manage environment variables. For example:

```
VITE_API_URL=https://api.example.com
```

Access these variables in your code using `import.meta.env.VITE_API_URL`:

```jsx
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);
```

## Conclusion

By following these steps, you will have a fully functional frontend application set up with React, Chakra UI, React Router, React Icons, and React Hook Form. This setup provides a solid foundation for building a modern, responsive web application.
