
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Core from "../pages/Core";
import Total from "../pages/Core/total";
import PdfExport from "../pages/PdfExport";
import Predicate from "../pages/predicate";
import Screen from "../pages/screen";

const routes = [
    {
    path: '/',
    element: <Home />
    },
    {
      path: '/core',
      element: <Core />,
      children: [
        {
          path: '/core',
          element: <Navigate to='total' replace/>
        },
        {
          path: 'total',
          element: <Total />
        },
        {
          path: 'predicate',
          element: <Predicate />
        },
        {
          path: 'pdfexport',
          element: <PdfExport />
        },
        {
          path: 'screen',
          element: <Screen />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
]

const router = createBrowserRouter(routes)
export default  router 


// import { useRoutes, Navigate } from "react-router-dom";

// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Core from "../pages/Core";
// import Total from "../pages/Core/total";

// const UseRoutes = () => useRoutes([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/core',
//     element: <Core />,
//     children: [
//       {
//         path: '/core',
//         element: <Navigate to={<Total />} replace/>
//       },
//       {
//         path: 'predicate',
//         element: <div>predicate</div>
//       },
//       {
//         path: 'pdfexport',
//         element: <div>pdf</div>
//       },
//       {
//         path: 'screen',
//         element: <div>screen</div>
//       }
//     ]
//   },
//   {
//     path: '/login',
//     element: <Login />
//   }
// ])
// export default UseRoutes