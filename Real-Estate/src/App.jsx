
import Navbar from "./components/navbar/navbar";
import "./global.scss";
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
import Agents from "./routes/agents/Agents";
import RatesTrends from "./routes/ratesTrends/RatesTrends";
import EmiCalculator from "./routes/emiCalculator/EmiCalculator";
import Reviews from "./routes/reviews/Reviews";
import ReviewDetail from "./routes/reviewDetail/ReviewDetail";


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
        {
          path: "/agents",
          element: <Agents />,
        },
        {
          path: "/rates-trends",
          element: <RatesTrends />,
        },
        {
          path: "/emi-calculator",
          element: <EmiCalculator />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/reviews/:id",
          element: <ReviewDetail />,
        }
      ],

    },

  ]);
  return <RouterProvider router={router} />;

}
export default App;