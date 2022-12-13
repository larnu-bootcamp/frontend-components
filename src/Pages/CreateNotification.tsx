import React from "react";
import NewNotification from "../components/Notification/newNotification.tsx"
import Navbar from "../components/Navbar/Navbar.tsx"
import "./css/createnotification.css"




const CreateNotification = () =>{
  return(
    <div className="createNotificationBody">
      <Navbar/>
      <NewNotification className="newnotifybody"/>
    </div>
  )
}

export { CreateNotification }