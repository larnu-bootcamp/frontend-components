import React from "react";
import "./css/ShowNotification.css";
import edit from "../../assets/edit.png";

function TableCardComponent() {
  return (
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
  );
}

const ShowNotification = () => {
  return (
    <div className="tableShowNotify">
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
        <TableCardComponent />
      </table>
    </div>
  );
};

export { ShowNotification };
