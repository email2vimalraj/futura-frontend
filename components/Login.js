import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "./AuthContext";
import LoadingIcon from "./LoadingIcon";

export default function Login({ onClose }) {
  const { login } = React.useContext(AuthContext);
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login(identifier, password);
    setLoading(false);
  };

  return (
    <div
      className="fixed w-80 md:w-full font-futuraBookRegular"
      style={{ zIndex: 10203 }}
    >
      <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
        <div className="shadow-2xl bg-white rounded-lg p-8">
          <div className="flex justify-end mb-6">
            <button onClick={() => onClose()}>
              <span className="mr-2">Close</span>
              <span>
                <FontAwesomeIcon icon="times-circle" />
              </span>
            </button>
          </div>

          <h1 className="text-center text-2xl text-green-800">Login</h1>

          <form className="pt-6 pb-2 my-2">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 focus:border-yellow-400 outline-none"
                id="email"
                type="text"
                placeholder="Email Address"
                disabled={loading}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 focus:border-yellow-400 outline-none"
                id="password"
                type="password"
                placeholder="Password"
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="block md:flex items-center justify-between">
              <div>
                <button
                  className={`inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded border-b-4 border-yellow-600 outline-none focus:bg-yellow-500 ${
                    loading || identifier === "" || password === ""
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                  type="button"
                  disabled={identifier === "" || password === ""}
                  onClick={() => handleLogin()}
                >
                  {loading && (
                    <>
                      <LoadingIcon />
                      &nbsp;
                    </>
                  )}
                  Sign In
                </button>
              </div>

              <div className="mt-4 md:mt-0">
                <a href="#" className="text-yellow-400 no-underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
