Redux Todo App

A modern and responsive Todo application built with React.js and Redux Toolkit. This project was created to learn and practice global state management, Redux Toolkit, actions, reducers, and the Redux data flow in a React application.

Live Demo

View Live Demo →

Screenshot

Features
Add new todos
Delete todos
Display total number of tasks
Global state management with Redux Toolkit
Redux createSlice
Redux store configuration
useDispatch for dispatching actions
useSelector for accessing Redux state
Unique Todo IDs using nanoid
Responsive user interface
Clean and modern design
Tailwind CSS styling
Deployed on Vercel
Tech Stack
React.js
Redux Toolkit
React Redux
JavaScript
Tailwind CSS
Vite
Vercel
Project Structure
Redux-ToDos/
│
├── public/
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   └── Todos.jsx
│   │
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Redux Data Flow

The application follows the standard Redux data flow:

User
  ↓
React Component
  ↓
dispatch(action)
  ↓
Redux Store
  ↓
Reducer
  ↓
State Updated
  ↓
useSelector()
  ↓
UI Updated
Add Todo Flow
User enters a Todo
        ↓
   AddTodo.jsx
        ↓
dispatch(addTodo(input))
        ↓
   todoSlice.js
        ↓
   addTodo reducer
        ↓
   Redux Store
        ↓
     Todos.jsx
        ↓
   New Todo displayed
Delete Todo Flow
User clicks Delete
        ↓
dispatch(removeTodo(todo.id))
        ↓
   removeTodo reducer
        ↓
Todo removed from Redux state
        ↓
    useSelector()
        ↓
      UI updates
Redux Concepts Used
1. Configure Store

configureStore() is used to create the Redux store and connect reducers to it.

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
2. Create Slice

createSlice() allows us to define the initial state, reducers, and actions in one place.

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Add todo
    },

    removeTodo: (state, action) => {
      // Remove todo
    },
  },
});
3. useDispatch

useDispatch() is used to dispatch actions to the Redux store.

const dispatch = useDispatch();

dispatch(addTodo(input));
4. useSelector

useSelector() is used to read data from the Redux store.

const todos = useSelector((state) => state.todos);
5. Action Payload

action.payload contains the data sent with an action.

dispatch(addTodo(input));

The value of input is received inside the reducer as:

action.payload
Installation
Clone the Repository
git clone https://github.com/Annu9111/Redux-ToDos.git
Navigate to the Project
cd Redux-ToDos
Install Dependencies
npm install
Start Development Server
npm run dev

Open the local URL provided by Vite in your browser.

Build for Production
npm run build
Preview Production Build
npm run preview
Deployment

This project is deployed on Vercel.

The project is connected to GitHub, allowing new deployments whenever changes are pushed to the main branch.

What I Learned

Through this project, I learned and practiced:

Redux fundamentals
Redux Toolkit
Global state management
configureStore()
createSlice()
Reducers
Actions
Action payloads
useSelector()
useDispatch()
Redux Provider
Redux store architecture
React and Redux integration
Component-based architecture
Managing state outside individual components
Redux data flow
Deploying React applications with Vercel
