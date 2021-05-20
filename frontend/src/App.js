import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Home from "./pages/Home";
import Login from "./components/auth/Login";
import UserContext from "./context/userContext";

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;