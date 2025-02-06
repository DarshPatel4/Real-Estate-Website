import Navbar from "./components/navbar/navbar"
import "./layout.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/homePage"
import ListPage from "./routes/listPage/listpage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlepage";
function App(){
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <HomePage />

        },
        {
          path:"/list",
          element: <ListPage />

        },
     
        {
          path:"/:id",
          element: <SinglePage />

        },  
      

      ]

    }
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar />
    //   </div>
    //   <div className="content">
    //   <HomePage />
      
    //   </div>
    //   </div>
    <RouterProvider router = {router}/>
  );
}

export default App;