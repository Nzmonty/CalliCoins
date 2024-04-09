import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from './routes/HomePage';
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ErrorPage from "./routes/ErrorPage";
import RootNav from "./routes/RootNav";
import App from "./App.jsx";
import TTTApp from "./TTTApp.jsx";   

const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootNav />,
        errorElement: <ErrorPage />,
        children: [
        {
            path: `/home`,
            index: true,
            element: <HomePage />
        },
        {
            path: `/game`,
            element: <GamePage />
        },
        {
            path: `/about`,
            element: <AboutPage />
        },
        {
            path: `/game/rps`,
            element: <App />
        },
        {
            path: `/game/ttt`,
            element: <TTTApp />
        }
    ], basename: import.meta.env.BASE_URL}
    ])
    

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
