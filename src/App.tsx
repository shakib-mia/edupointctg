import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const router = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        {router.map((item, key) => (
          <Route {...item} key={key + item.path} />
        ))}
      </Routes>
    </>
  );
};

export default App;
