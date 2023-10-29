import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "./constants";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import RequireAuth from "./RequireAuth";

const globalState: any = {};

export const AppContext = createContext(globalState);

const App = () => {
  const router = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/profile",
      element: (
        <RequireAuth>
          <Profile />
        </RequireAuth>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
    },
  ];

  const [store, setStore] = useState({
    token: localStorage.getItem("token"),
  });

  useEffect(() => {
    const config = {
      headers: {
        token: store.token,
      },
    };
    if (store.token) {
      axios
        .get(backendUrl + "profile", config)
        .then(({ data }) => setStore({ ...store, ...data }));
    }
  }, [store, store.token]);

  return (
    <AppContext.Provider value={{ store, setStore }}>
      <Navbar />
      <Routes>
        {router.map((item, key) => (
          <Route {...item} key={key + item.path} />
        ))}
      </Routes>
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default App;
