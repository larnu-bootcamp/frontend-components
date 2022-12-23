import React from "react";
import "./css/ShowNotification.css";
import edit from "../../assets/edit.png";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.png"

function TableCardComponent() {
  return (
    <table>
    <tr>
      <td>campaña</td>
      <td>inicio</td>
      <td>estado</td>
      <td>orientacion</td>
      <td>envios</td>
      <td>abiertos</td>
      <td>% de abertura</td>
      <td>
        <button className="buttonEdit">
          <img className="edit" src={edit} />
        </button>
      </td>
    </tr>
    </table>
    
  );
}

const ShowNotification = () => {
  return (
    <div className="tableShowNotify">
      <div>
        <div className="notificationAddButtonShow">
          <div className="notificationBoxText">
            <h2 className="notificationTextBar">Notificaciones Push</h2>
          </div>
          <Link to='/Create-Notification'>
          <div className="hola">
          <button className="buttonNewNotification" >
            <img src={plus} className="notificationImagePlus" /> 
            Nueva Notificacion 
          </button>
          </div>
          </Link>
        </div>
        <div className="tablesNotification">
      <table className="tableStatic">
        <tr>
          <th>campaña</th>
          <th>inicio</th>
          <th>estado</th>
          <th>orientacion</th>
          <th>envios</th>
          <th>abiertos</th>
          <th>% de abertura</th>
          <th></th>
        </tr>
        
      </table>
      <TableCardComponent />
      </div>
    </div>
    </div>
  );
};

export { ShowNotification };
