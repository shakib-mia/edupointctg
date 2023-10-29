import { FormEvent, useContext } from "react";
import Form from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../constants";
import { toast } from "react-toastify";
import { AppContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();
  const { store, setStore } = useContext(AppContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    axios
      .post(backendUrl + "login", { email, password })
      .then(({ data }) => {
        // console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
          setStore({ ...store, token: data.token });
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.message);
      });
  };

  const fields = [
    {
      label: "Email Address",
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Enter Your Email Address Here",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      name: "password",
      placeholder: "Enter Your Password Here",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 h-fit shadow-2xl rounded p-16 text-white">
        <Form
          submitText="Login"
          handleSubmit={handleSubmit}
          fields={fields}
          heading="Login"
        />

        <div className="text-center mt-5">
          Don't have an account?{" "}
          <Link className="underline hover:no-underline" to="/register">
            Register
          </Link>
        </div>

        {/* <button onClick={() => signInWithGoogle()}>google</button> */}
      </div>
    </div>
  );
};

export default Login;
