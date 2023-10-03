import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", json.token);
      navigate(-1);
    } else {
      setErrors(json.message);
    }
    setLoader(false);
  };

  if (errors) {
    setTimeout(() => {
      setErrors(null);
    }, 4000);
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div
            class={`bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative ${
              !errors && "hidden"
            }`}
            role="alert"
          >
            <span class="block sm:inline">{errors}</span>
          </div>
          <form class="space-y-6" onSubmit={submitLogin} method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  onChange={onchange}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-semibold text-sky-600 hover:text-sky-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  onChange={onchange}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Login
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Haven't Account ?
            <a
              href="/signup"
              class="font-semibold leading-6 text-sky-600 hover:text-sky-500"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
