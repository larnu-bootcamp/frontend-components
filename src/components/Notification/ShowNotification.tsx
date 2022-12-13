import React from "react";
import "./css/ShowNotification.css"
import edit from '../../assets/edit.png'


function TableCardComponent (){
return(

        <tr>
          <td>campaña</td>
          <td>inicio</td>
          <td>estado</td>
          <td>orientacion</td>
          <td>envios</td>
          <td>abiertos</td>
          <td>% de abertura</td>
          <td><button><img src={edit}/></button></td>
        </tr>
        
)
}



const ShowNotification = () => {
  return (
    <React.Fragment>
      <table>
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
        <TableCardComponent/>
      </table>

      </React.Fragment>
    
  );
};

export { ShowNotification };
