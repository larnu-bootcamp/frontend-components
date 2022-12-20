import DashboardWrapper from "./dashboardWrapper";
import dashLogo from "../assets/dashboard.png";
import pushLogo from "../assets/paper-plane.png";
import ReactGa from "react-ga";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import AuthProvider from "./authProvider";

export default function SideBar() {
  let navigate = useNavigate();

  // This function allow to change to Push View
  //Note: This function is not used in this version of the app
  const handleOnClick = () => {
    ReactGa.event({ category: "click push", action: "click", label: "label" });
    navigate("/push-view");
  };
  //This function allow to change to the dashboard
  const handleOnClick2 = () => {
    ReactGa.event({ category: "click home", action: "click", label: "label" });
    navigate("/dashboard");
  };

  if (window.location.pathname === "/dashboard") {
    return (
      <div className="dashboardSider">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="dashboardSiderNav">
          <div className="dashboardSiderButtons1">
            <a className="dashboardSiderItem" onClick={handleOnClick2}>
              <img className="dashLogo" src={dashLogo} alt="dashLogo" />
              Dashboard
            </a>
          </div>
          <div className="dashboardSiderButtons2">
            <a onClick={handleOnClick}>
              <img className="pushLogo" src={pushLogo} alt="pushLogo" />
              Notificaciones Push
            </a>
          </div>
        </div>
        <DashboardWrapper children={null} />
      </div>
    );
  } else {
    return (
      <div className="dashboardSider">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="dashboardSiderNav">
          <div className="dashboardSiderButtons1">
            <a onClick={handleOnClick2}>
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
    );
  }
}
