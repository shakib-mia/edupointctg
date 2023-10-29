import { FormEvent, useContext, useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import SocialAuthButton from "../../components/SocialAuthButton/SocialAuthButton";
import googleIcon from "../../assets/icons/google-icon.webp";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import axios from "axios";
import { backendUrl } from "../../constants";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

type userData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [text, setText] = useState("Continue With Google");
  const navigate = useNavigate();
  const { store, setStore } = useContext(AppContext);

  // console.log(user?.user.displayName);

  useEffect(() => {
    if (loading) {
      setText("Logging in...");
    }

    if (error) {
      setText("Failed...");
    }

    if (user) {
      console.log(user.user);
      setText("Data extraction from gmail successful!!!");
    }
  }, [loading, error, user]);

  const fields = [
    {
      label: "First Name",
      id: "firstName",
      type: "text",
      name: "firstName",
      // placeholder: "Enter Your First Name Here",
      required: true,
      value: user?.user.displayName
        ? user.user.displayName?.split(" ")[0] +
          " " +
          user?.user.displayName?.split(" ")[1]
        : "",
      disabled: user?.user.displayName
        ? user.user.displayName?.split(" ")[0] +
          " " +
          user?.user.displayName?.split(" ")[1]
        : false,
    },
    {
      label: "Last Name",
      id: "lastName",
      type: "text",
      name: "lastName",
      // placeholder: "Enter Your last Name Here",
      required: true,
      value: user?.user.displayName?.split(" ")[2] || "",
      disabled: user?.user.displayName
        ? user.user.displayName?.split(" ")[0] +
          " " +
          user?.user.displayName?.split(" ")[1]
        : false,
    },
    {
      label: "Email Address",
      id: "email",
      type: "email",
      name: "email",
      // placeholder: "Enter Your Email Address Here",
      required: true,
      value: user?.user.email,
      disabled: user?.user.email,
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      name: "password",
      // placeholder: "Enter Your Password Here",
      required: true,
    },

    {
      label: "Confirm Password",
      id: "confirm-password",
      type: "password",
      name: "confirmPassword",
      // placeholder: "Confirm Your Password Here",
      required: true,
    },
  ];

  // console.log(fields);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(fields);

    const data: userData = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    for (const field of fields) {
      console.log(field);
      data[field.name] = field.value;
    }

    // console.log(data);
    const { email, firstName, lastName, password, confirmPassword } =
      e.target as HTMLFormElement;
    // console.log(password.value);

    // console.log({ email: email.value });

    if (password.value === confirmPassword.value) {
      axios
        .post(backendUrl + "register", {
          email: email.value,
          firstName: firstName.value,
          lastName: lastName.value,
          password: password.value,
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          navigate("/");
          setStore({ ...store, token: data.token });
        })
        .catch((error) => {
          toast.error(error.response.data.error, {
            position: "bottom-right",
          });
        });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/3 h-fit shadow-2xl rounded p-16 text-white">
        <Form
          submitText="Register"
          handleSubmit={handleSubmit}
          fields={fields}
          heading="Register"
        />

        <div className="flex gap-4 items-center w-1/2 mx-auto my-5">
          <div className="w-full h-[1px] bg-[#ffffffaa]"></div>
          <p>or</p>
          <div className="w-full h-[1px] bg-[#ffffffaa]"></div>
        </div>

        <SocialAuthButton
          icon={!loading && !user && googleIcon}
          text={text}
          onClick={signInWithGoogle}
        />

        <div className="text-center mt-5">
          Already have an account?{" "}
          <Link className="underline hover:no-underline" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
