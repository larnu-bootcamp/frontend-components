import React, { useState } from "react";
import "./css/Notification.css";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";
import { Link } from "react-router-dom";








const Notification = () => {
  
  
  return (
    <div className="notificationComponent">
      <div>
        <div className="notificationAddButtonBar">
          <div className="notificationBoxText">
            <h2 className="notificationTextBar">Notificaciones Push</h2>
          </div>
          <Link to='/Create-Notification'>
          <button className="buttonNewNotification" >
            <img src={plus} className="notificationImagePlus" /> 
            Nueva Notificacion 
          </button>
          </Link>
        </div>
      </div>
      <div className="notificationBoxBody">
        <img className="notificationImageMessage" src={message} />
        <p className="titleBoxBody">Crea tu primera notificacion</p>
      </div>
    </div>
  );
};

export default Notification;
