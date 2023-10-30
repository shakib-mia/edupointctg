import { FormEvent, useContext, useEffect } from "react";
import Form from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../constants";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import googleIcon from "../../assets/icons/google-icon.webp";
import SocialAuthButton from "../../components/SocialAuthButton/SocialAuthButton";
import { auth } from "../../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const { store, setStore } = useContext(AppContext);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      // console.log(user);
      axios
        .get(backendUrl + "user-with-firebase-auth/" + user.user.email)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          setStore({ ...store, token: data.token });
        });

      navigate("/");
    }

    if (loading) {
      console.log(loading);
    }

    if (error) {
      console.log(error);
    }
  }, [user, loading, error]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    axios
      .post(backendUrl + "login", { email, password })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/");
          setStore({ ...store, token: data.token });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const fields = [
    {
      label: "Email Address",
      id: "email",
      type: "email",
      name: "email",
      required: true,
      // placeholder: "Enter Your Email Address Here",
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      name: "password",
      required: true,
      // placeholder: "Enter Your Password Here",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/3 h-fit shadow-2xl rounded p-16 text-white">
        <Form
          submitText="Login"
          handleSubmit={handleSubmit}
          fields={fields}
          heading="Login"
        />

        <div className="flex gap-4 items-center w-1/2 mx-auto my-5">
          <div className="w-full h-[1px] bg-[#ffffffaa]"></div>
          <p>or</p>
          <div className="w-full h-[1px] bg-[#ffffffaa]"></div>
        </div>

        <SocialAuthButton
          icon={googleIcon}
          text={"Continue With Google"}
          onClick={signInWithGoogle}
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
