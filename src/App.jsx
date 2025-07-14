// import ProductCreate from "../../React-SagnikSir/form/src/pages/cms/productCreate/productCreate";
// import Login from "./pages/auth/login/login";
// import Register from "./pages/auth/register/register";
// import ProductList from "./pages/cms/productList/productList";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// function PrivateRouter({children}){
//   const token = localStorage.getItem("token");
//   return token !== null && token !== undefined?(
//     children
//   ): (
//     <>
//     <Navigate to="/" />
//         {alert("Please go for login either you can't access product list")}
//     </>
//   )
// }

// function App() {
//   const privateRoute=[
//     {
//       path:`/cms/productList`,
//       component:<ProductList/>
//     },

//      {
//       path:`/cms/productCreate`,
//       component:<ProductCreate/>
//     },
//     //  {
//     //   path:`/cms/update`,
//     //   component:<Update/>
//     // },
//     // {
//     //   path:`/auth/profileDetails`,
//     //   component:<ProfileDetails/>
//     // },
//     // {
//     //   path:"/cms/edit/:id",
//     //   component:<Edit/>
//     // }
//   ]

//   const publicRoute=[
//     {
//       path:`/`,
//       component:<Login/>
//     },
//     {
//       path:`/auth/register`,
//       component:<Register/>
//     }
//   ]

//   return (
//     <>

//      <Router>
//       <Routes>
//         {publicRoute.map((route,index)=>{
//          return <Route key={index} path={route.path} element={route.component}/>
//         })}
//          {privateRoute.map((route,index)=>{
//         return <Route key={index} path={route.path} element={<PrivateRouter>{route.component}</PrivateRouter>}/>
//         })}
//       </Routes>
//      </Router>
//     </>
//   )
// }

// export default App,

import { Suspense, lazy } from "react";

import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import ProductList from "./pages/cms/productList/productList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import SpinnerWithDesign from "./components/spinner/spinner";
const ProductCreate = lazy(() =>
  import("./pages/cms/productCreate/productCreate")
);
const Edit = lazy(() => import("./pages/cms/edit/edit"));
const Update = lazy(() => import("./pages/cms/update/update"));
const Welcome = lazy(() => import("./pages/auth/welcomepage/welcome"));
const ProfileDetails = lazy(() =>
  import("./pages/auth/profileDetails/profileDetails")
);

// import Footer from './layout/footer/footer';

function PrivateRouter({ children }) {
  const token = localStorage.getItem("token");
  return token !== null && token !== undefined ? (
    children
  ) : (
    <>
      <Navigate to="/" />
      {alert("Please go for login either you can't access product list")}
    </>
  );
}

function App() {
  const privateRoute = [
    {
      path: `/cms/productList`,
      component: <ProductList />,
    },
    {
      path: `/cms/productCreate`,
      component: <ProductCreate />,
    },
    {
      path: `/cms/edit/:id`,
      component: <Edit />,
    },
    {
      path: `/cms/update`,
      component: <Update />,
    },
    {
      path: `/auth/profileDetails`,
      component: <ProfileDetails />,
    },
  ];

  const publicRoute = [
    {
      path: `/`,
      component: <Welcome />,
    },
    {
      path: `/auth/login`,
      component: <Login />,
    },
    {
      path: `/auth/register`,
      component: <Register />,
    },
  ];

  return (
    <>
      <Suspense fallback={<SpinnerWithDesign />}>
        <Router>
          <Header />
          <Routes>
            {publicRoute.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
            {privateRoute.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<PrivateRouter>{route.component}</PrivateRouter>}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
      {/* <CssBaseline />  */}
    </>
  );
}

export default App;
