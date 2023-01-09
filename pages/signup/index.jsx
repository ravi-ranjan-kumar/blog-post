import axios from "axios";
// import Link from "next/link";
import React, { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [credentials, setCredentials] = useState(initialValues);
  const [errors, setErrors] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/users', {
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      password: credentials.password,
      email: credentials.email
    }).then(res=>console.log(res))
    .catch((error)=>{
      if(error?.response?.status === 400) {
        setErrors(error?.response?.data?.error?.errors?? error?.response?.data?.error)
      }
      else if(error?.response?.status === 500) {
        setErrors({message: "Connection error"})
      }
    })
  };

  return (
    <section className="flex items-center justify-center h-[calc(100vh-6rem)] bg-gray-100">
      <div className="px-8 py-3 mx-4 mt-4 text-left bg-white shadow-lg lg:w-2/4 sm:w-2/3 border">
        <h3 className="text-2xl font-bold text-center">Sign Up</h3>
        {/* <p className="text-red-500">{errors?.errors}</p> */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="flex gap-4">
              <div>
                <label className="block" htmlFor="firstName">
                  First Name
                  <input
                    type="text"
                    placeholder="First Name"
                    className="capitalize w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                    value={credentials?.firstName}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        firstName: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div>
                <label className="block" htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="capitalize w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                    value={credentials?.lastName}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        lastName: e.target.value,
                      });
                      setErrors();
                    }}
                  />
                </label>
              </div>
            </div>
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
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?{" "}
              {/* <Link
                href="account/login"
                className="text-blue-600 hover:underline underline-offset-2 font-medium"
              >
                Log in
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;

export async function callSignUpApi(credentials) {
  console.log(credentials);
  try {
    const res = await fetch(`/account/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      return {};
    } else {
      return res.json();
    }
  } catch (errors) {
    return {
      errors: errors.toString(),
    };
  }
}
