import { FormEvent, useContext } from "react";
import Form from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../constants";
import { toast } from "react-toastify";
import { AppContext } from "../../App";

const Register = () => {
  const navigate = useNavigate();
  const { store, setStore } = useContext(AppContext);
  const fields = [
    {
      label: "First Name",
      id: "firstName",
      type: "text",
      name: "firstName",
      placeholder: "Enter Your First Name Here",
      required: true,
    },
    {
      label: "last Name",
      id: "lastName",
      type: "text",
      name: "lastName",
      placeholder: "Enter Your last Name Here",
      required: true,
    },
    {
      label: "Email Address",
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Enter Your Email Address Here",
      required: true,
    },

    {
      label: "Password",
      id: "password",
      type: "password",
      name: "password",
      placeholder: "Enter Your Password Here",
      required: true,
    },

    {
      label: "Confirm Password",
      id: "confirm-password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Your Password Here",
      required: true,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, firstName, lastName, password, confirmPassword } =
      e.target as HTMLFormElement;

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
      <div className="w-1/2 h-fit shadow-2xl rounded p-16 text-white">
        <Form
          submitText="Register"
          handleSubmit={handleSubmit}
          fields={fields}
          heading="Register"
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
