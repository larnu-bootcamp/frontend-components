import React from "react";
import "./css/Notification.css";
import plus from "../../assets/plus.png";
import message from "../../assets/message.png";

const Notification = () => {
  return (
    <div className="Notification__page_body">
      <div>
        <div className="Notification__add_button_bar">
          <div className="Notification__box_text">
            <h2 className="Notification__text_bar">Notificaciones Push</h2>
          </div>
          <button className="button__new_notification">
            <img src={plus} className="Notification__image_plus" /> Nueva
            Notificacion
          </button>
        </div>
      </div>
      <div className="Notification__box_body">
        <img className="Notification__image_message" src={message} />
        <p>Crea tu primera notificacion</p>
      </div>
    </div>
  );
};

export default Notification;
