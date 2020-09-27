import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import Nav from "./Components/Nav";
import { useDispatch } from "react-redux";
import userActions from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  if (!!user) {
    dispatch(userActions.loginUserToDB(JSON.parse(user)));
  }
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;
