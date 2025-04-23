import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import ProjectDetail from "../pages/Projects/ProjectDetail";
import Blog from "../pages/Blogs/Blog";
import BlogDetails from "../pages/Blogs/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />
      }
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  
]);
