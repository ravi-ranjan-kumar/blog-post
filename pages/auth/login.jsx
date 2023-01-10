import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Router from "next/router";
const initialFormData = {
  email: "",
  password: "",
};

const Index = () => {
  const [credentials, setCredentials] = useState(initialFormData);
  const [errors, setErrors] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
    if (res.ok) {
      Router.replace("/");
    }
    if(res?.error) {
      setErrors({
        message: res.error
      })
    }
  };
  return (
    <section className="flex items-center justify-center h-[calc(100vh-6rem)] bg-gray-100">
      <div className="px-8 py-3 mx-4 mt-4 text-left bg-white shadow-lg lg:w-2/4 sm:w-2/3 border">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="lowercase w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                value={credentials?.email}
                onChange={(e) => {
                  setCredentials({ ...credentials, email: e.target.value });
                  setErrors();
                }}
              />
              <p className="text-red-500">{errors?.email?.message}</p>
            </div>
            <div className="mt-4">
              <label className="block">
                Password
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                  value={credentials?.password}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                    setErrors();
                  }}
                />
                <p className="text-red-500">{errors?.password?.message}</p>
              </label>
            </div>
            <span className="text-red-500">{errors?.message}</span>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Didn't have an account?{" "}
              <Link
                href="signup"
                className="text-blue-600 hover:underline underline-offset-2 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
