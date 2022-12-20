import { Link } from "react-router-dom";
import ReactGa from "react-ga";
import plus from "../assets/plus.png";

/* Component to sing out the user */
export default function DashboardWrapper(props: any) {
  const { children } = props;
  ReactGa.event({
    category: "click signOut",
    action: "click",
    label: "label",
  });
  return (
    <div className="signOutContainer">
      <div className="signOut">
        <img className="plus" src={plus} alt="plus" />
        <nav>
          <Link to="/signout">
            <h3>Logout</h3>
          </Link>
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
