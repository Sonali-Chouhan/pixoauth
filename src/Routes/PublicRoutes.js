import React from 'react';
const Login = React.lazy(() => import("../Pages/Login/login"));

const PublicRoutes = [
    {
      path: "/",
      element: <Login />,
    },
]
export default PublicRoutes;