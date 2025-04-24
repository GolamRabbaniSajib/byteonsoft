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
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import AddBlog from "../pages/Dashboard/AddBlog/AddBlog";
import AddTestimonial from "../pages/Dashboard/AddTestimonial/AddTestimonial";

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
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/add-service",
        element: <AddServices />
      },
      {
        path: "/dashboard/add-blog",
        element: <AddBlog />
      },
      {
        path: "/dashboard/add-testimonial",
        element: <AddTestimonial />
      }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  
]);
