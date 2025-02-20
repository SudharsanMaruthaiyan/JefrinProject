import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const { token, backendUrl, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // 🔹 Handle Register API Call
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Registration Successful!");
        navigate("/");
      } else {
        toast.error("Already Registered");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  // 🔹 Handle Login API Call
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 pt-10">
      <div className="relative w-[850px] h-[550px] bg-white shadow-xl rounded-3xl overflow-hidden transition-all duration-700 -z-0">
        {/* Login Form */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center transition-all duration-700 z-50 ${
            isRegister ? "translate-x-full opacity-0" : "opacity-100 translate-x-0"
          }`}
        >
          <form className="w-full max-w-sm text-center p-6 z-50" onSubmit={handleLogin}>
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <div className="mb-4 relative z-50">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 border-gray-700 outline-blue-400 border"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 border-gray-700 outline-blue-400 border"
                required
              />
            </div>
            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg">
              Login
            </button>
          </form>
        </div>

        {/* Register Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center transition-all duration-700 z-50 ${
            isRegister ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50%]"
          }`}
        >
          <form className="w-full max-w-sm text-center p-6" onSubmit={handleRegister}>
            <h1 className="text-3xl font-bold mb-5">Registration</h1>
            <div className="mb-4 relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-700 outline-blue-400"
                required
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-700 outline-blue-400"
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-700 outline-blue-400"
                required
              />
            </div>
            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg">
              Register
            </button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="absolute w-full h-full top-0 left-0 flex">
          <div
            className={`w-1/2 h-full flex flex-col items-center justify-center text-white bg-blue-600 transition-all duration-700 ${
              isRegister ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="mb-4">Don't have an account?</p>
            <button
              className="px-6 py-2 border border-white rounded-lg cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>
          <div
            className={`w-1/2 h-full flex flex-col items-center justify-center text-white bg-blue-600 transition-all duration-700 ${
              isRegister ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="mb-4">Already have an account?</p>
            <button
              className="px-6 py-2 border border-white rounded-lg cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
