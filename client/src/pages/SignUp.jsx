import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  dob: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  registeredAs: yup.string().oneOf(["tenant", "owner"], "Select a valid option").required("Registered as is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", 
  });
  
  const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   console.log("Form Data:", data);
  //   alert("Form submitted successfully!");
  // };

  const onSubmit = async (data) => {
    try {
      // 🔥 Send email in body with POST
      const res = await axios.post(`http://localhost:4000/api/auth/check-email`, {
        email: data.email
      });
  
      if (res.data.exists) {
        alert("Email already exists! Please use a different one.");
        return;
      }
  
      // Proceed to signup if email doesn't exist
      const response = await axios.post("http://localhost:4000/api/auth/signup/", {
        userType: data.registeredAs,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        address: data.address,
        gender: data.gender,
        dateOfBirth: data.dob
      });
  
      alert("Signup successful!");
      navigate("/login");
  
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 justify-center items-center flex">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
       
      <div>
          <label>First Name</label>
          <input {...register("firstName")} type="text" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} type="text" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>
       
        <div>
          <label>Email</label>
          <input {...register("email")} type="email" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label>Password</label>
          <input {...register("password")} type="password" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <label>Confirm Password</label>
          <input {...register("confirmPassword")} type="password" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        </div>

        

        <div>
          <label>Address</label>
          <input {...register("address")} type="text" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        <div>
          <label>Date of Birth</label>
          <input {...register("dob")} type="date" className="w-full p-2 border" />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>
        </div>

        <div>
          <label>Gender</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" value="male" {...register("gender")} /> Male
            </label>
            <label>
              <input type="radio" value="female" {...register("gender")} /> Female
            </label>
            <label>
              <input type="radio" value="other" {...register("gender")} /> Other
            </label>
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div>
          <label>Registered As</label>
          <select {...register("registeredAs")} className="w-full p-2 border">
            <option value="">Select</option>
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
          </select>
          <p className="text-red-500 text-sm">{errors.registeredAs?.message}</p>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
