import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Loading from "../Pages/Loading";
import AuthLayout from "../Layouts/AuthLayout";
import Subscriptions from "../Components/Subscriptions";
import SubscriptionDetails from "../Pages/SubscriptionDetails";
import ForgetPassPage from "../Pages/ForgetPassPage";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    loader: () => fetch("/subscription.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgetPass",
        element: <ForgetPassPage></ForgetPassPage>,
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <PrivateRoute>
        <Blog></Blog>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <SubscriptionDetails></SubscriptionDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/subscription.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
