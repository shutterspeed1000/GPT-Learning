import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages
import IssueForm from "./pages/issueform";
import LoginForm from "./pages/login";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";

// router paths for site

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/issue",
        element: <IssueForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
