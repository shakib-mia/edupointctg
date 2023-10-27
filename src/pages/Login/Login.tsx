import { FormEvent } from "react";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = {
      email: (e.target as HTMLFormElement).email.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    console.log({ email, password });
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
    <div className="h-screen bg-gradient-to-r from-[#002c6a] via-[#00419d] to-[#002c6a] flex justify-center items-center">
      <div className="w-1/2 h-fit shadow-2xl rounded p-16 text-white">
        <Form
          submitText="Login"
          handleSubmit={handleSubmit}
          fields={fields}
          heading="Login"
        />

        <div className="text-center mt-5">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
