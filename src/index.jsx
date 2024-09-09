import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./firebase"
import "./index.css"

import { Provider } from "react-redux"
import { store } from "./store/store"
import { HomePage } from "./pages/home/HomePage"
import { SettingsPage } from "./pages/settings/SettingsPage"
import { TasksPage } from "./pages/tasks/TasksPage"
import { TimeManagPage } from "./pages/timeManagement/TimeManagPage"
import { TimerPage } from "./pages/timer/TimerPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { AuthPage } from "./pages/auth/AuthPage"
import Layout from "./app/Layout"
import AuthProvider from "./processes/AuthProvider"

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "timer",
        element: <TimerPage />,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "time-management",
        element: <TimeManagPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
)

// {
//   path: "/auth",
//   element: <AuthPage />,
// },
// {
//   path: "/",
//   element: <Layout />,
//   errorElement: <NotFoundPage />,
//   children: [
//     {
//       path: "",
//       element: <HomePage />,
//     },
//     {
//       path: "timer",
//       element: <TimerPage />,
//     },
//     {
//       path: "tasks",
//       element: <TasksPage />,
//     },
//     {
//       path: "time-management",
//       element: <TimeManagPage />,
//     },
//     {
//       path: "settings",
//       element: <SettingsPage />,
//     },
//   ],
// },
