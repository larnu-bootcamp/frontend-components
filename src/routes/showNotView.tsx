import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactGa from "react-ga";
import AuthProvider from "../components/authProvider";
import { ShowNotification } from "../components/Notification/ShowNotification";
import SideBar from "../components/sidebar";

export default function ShowNot() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  // When the user is logged in navigate to the dashboard
  function handleUserLoggedIn(user: React.SetStateAction<{}>) {
    setCurrentUser(user);
    setState(2);
  }

  // Logeado without register
  function handleUserNotRegistred(user: any) {
    navigate("/login");
  }

  // if user is not logged in, navigate to the login page
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
    <div className="newNotifypage" >
      <SideBar />
      <div className="notifyNew">
        <ShowNotification />
      </div>
    </div>
  );
}
