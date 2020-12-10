import React from "react";
import { API_URL } from "../utils";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  username: null,
  login: async (identifier, password) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [state, setState] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("username") ? true : false;
    setState(isLoggedIn);
    if (isLoggedIn) {
      setToken(
        window.localStorage.getItem("jwt")
          ? window.localStorage.getItem("jwt")
          : null
      );
      setUsername(
        window.localStorage.getItem("username")
          ? window.localStorage.getItem("username")
          : null
      );
    }
  }, []);

  const login = async (identifier, password) => {
    if (typeof window === "undefined") {
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ identifier, password });

    const requestOptions = {
      method: "POST",
      body: raw,
      headers: myHeaders,
    };

    try {
      const response = await fetch(`${API_URL}/auth/local`, requestOptions);
      const result = await response.json();

      window.localStorage.setItem("username", result.user.username);
      window.localStorage.setItem("jwt", result.jwt);
      setState(true);
      setToken(result.jwt);
      setUsername(result.user.username);
      return true;
    } catch (err) {
      console.error(`Error logging in ${err}`);
      setState(false);
      setToken(null);
      setUsername(null);
      return false;
    }
  };

  const logout = () => {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("jwt");
    setState(false);
    setToken(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: state, token, username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
