/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import ReactGa from "react-ga";
import { Push } from "../components/push";
import SideBar from "../components/sidebar";

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

  return (
    <div className="dashboardContainer">
      <SideBar />
      <div className="PushView">{<Push />}</div>
    </div>
  );
}
