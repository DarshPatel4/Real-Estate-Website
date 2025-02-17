// App.jsx
import Navbar from "./components/navbar/navbar";
import "./layout.scss";

import HomePage from "./routes/homePage";
import ListPage from "./routes/listPage/listpage";
import { Layout, RequireAuth } from "./routes/layout/layout"; // Adjust import statement
import SinglePage from "./routes/singlePage/singlepage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import About from "./routes/about/about";
import Contact from "./routes/contact/Contact";
import PropertyBooking from "./routes/booking/PropertyBooking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/booking",
          element: <PropertyBooking />,
        },
        {
        path: "/contact",
        element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile",
          element: (
           <RequireAuth>
            <ProfilePage />
           </RequireAuth>
          ),
        },
        {
          path: "/profile/update",
          element: (
            <RequireAuth>
              <ProfileUpdatePage />
            </RequireAuth>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
