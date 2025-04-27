import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Validation schema
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { login } = useAuth(); // 👈 use login from context
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const success = await login(data.email, data.password); // Ensure login finishes before proceeding
    if (success) {
      alert("Login successful!");
     // console.log("Navigating to profile...");
      navigate("/profile"); // Redirect to profile page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div>
          <label>Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Password Field */}
        <div>
          <label>Password</label>
          <input
            {...register("password")}
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-sm mt-2 text-center">
          Not a member?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
