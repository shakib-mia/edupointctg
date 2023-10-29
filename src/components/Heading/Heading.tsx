import React, { useContext } from "react";
import { Button } from "../Button/Button";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Heading = () => {
  const { store } = useContext(AppContext);
  // const navigate = useNavigate();
  // console.log(store.token);
  //   const navigate = useNavigate();
  //   console.log(store);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-center text-white">
        Unlock Your Potential with EduPointCTG
      </h1>

      <h4 className="text-3xl mt-5 font-medium text-center text-white">
        Discover High-Quality Online Education
      </h4>

      <Link to="/dashboard">
        <Button type="primary" className="mt-10">
          {!store.token ? "Get Started" : "Continue Course"}
        </Button>
      </Link>
    </div>
  );
};

export default Heading;
