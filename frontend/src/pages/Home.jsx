import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../context/userContext";

const Home = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <h1>Welcome, {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log In</Link>
        </>
      )}
    </div>
  );
};

export default Home;
