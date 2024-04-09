// import HomePage from "../routes/HomePage"
// import React from "react"
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";
// import HomePage from "../routes/HomePage";
// import GamePage from "../routes/GamePage";
// import AboutPage from "../routes/AboutPage";
// import ErrorPage from "../routes/ErrorPage";
// import RootNav from "../routes/RootNav";

// const router = createBrowserRouter ([
//     {
//         path: "/",
//         element: <RootNav />,
//         errorElement: <ErrorPage />,
//         children: [
//         {
//             index: true,
//             element: <HomePage />
//         },
//         {
//             path: `/rps`,
//             element: <GamePage />
//         },
//         {
//             path: `/about`,
//             element: <AboutPage />
//         },
//     ],// {basename: import.meta.env.BASE_URL}
//     },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );