import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import UserContext from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(UserContext);

  //   useEffect(() => {
  //     console.log(userData);
  //   }, [userData]);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = { email, password };
      const loginRes = await axios.post(
        "http://localhost:8080/users/login",
        loginUser
      );
      setUserData(loginRes.data.user);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
