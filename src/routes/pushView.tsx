/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import AuthProvider from "../components/authProvider";
import DashboardWrapper from "../components/dashboardWrapper";
import dashLogo from "../assets/dashboard.png";
import pushLogo from "../assets/paper-plane.png";
import ReactGa from "react-ga";
import Iframe from "react-iframe";
import React from "react";
import {Push}  from "../components/push";
/* Push View*/
export default function Dashboard() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  /* When the user is logged in navigate to the dashboard */
  function handleUserLoggedIn(user: React.SetStateAction<{}>) {
    setCurrentUser(user);
    setState(2);
  }

  /* Logeado without register */
  function handleUserNotRegistred(user: any) {
    navigate("/login");
  }

  /* if user is not logged in, navigate to the login page */
  function handleUserNotLoggedIn() {
    navigate("/login");
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistred={handleUserNotRegistred}
      >
        <div className="loading">Loading...</div>
      </AuthProvider>
    );
  }

  /* This function allow to change to Push View */
  /*Note: This function is not used in this version of the app*/
  const handleOnClick = () => {
    ReactGa.event({ category: "click push", action: "click", label: "label" });
    navigate("/push-view");
  };
  /* This function allow to change to the dashboard */
  const handleOnClick2 = () => {
    ReactGa.event({ category: "click home", action: "click", label: "label" });
    navigate("/dashboard");
  };


  return (
    <div className="dashboardContainer">
      <div className="dashboardSider">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="dashboardSiderNav">
          <div className="dashboardSiderButtons1">
            <a  onClick={handleOnClick2}>
              <img className="dashLogo" src={dashLogo} alt="dashLogo" />
              Dashboard
            </a>
          </div>
          <div className="dashboardSiderButtons2">
            <a className="dashboardSiderItem" onClick={handleOnClick}>
              <img className="pushLogo" src={pushLogo} alt="pushLogo" />
              Notificaciones Push
            </a>
          </div>
        </div>
        <DashboardWrapper children={null} />
      </div>
      <div className="PushView">
       { <Push /> }
      </div>
    </div>
  );
}
