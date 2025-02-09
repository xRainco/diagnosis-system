import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const UseRoutes = () => useRoutes([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])
export default UseRoutes