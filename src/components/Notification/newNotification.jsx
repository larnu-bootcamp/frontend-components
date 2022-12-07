import React, { useState } from "react";
import android from "../../assets/android.png";
import ios from "../../assets/ios.png";
import "./css/newNotification.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import info from "../../assets/info.png"


function NowDateComponent ()  {
  const [startDate, setStartDate] = useState(new Date());
  
  return(
    <React.Fragment>
    <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            inline
          />
          </React.Fragment>
  )
}



const NewNotification = () => {
  
  const [isNowDate, setIsNowDate] = useState(false);
  
  const handleNowButton = () => {
    setIsNowDate(true)
  }

  return (
    <div className="newNotificationBody">
      
      <div className="newNotify">
      <h1>Detalle nueva notificacion push</h1>
        <form
          className="formNotify"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <label name="title" className="title actions">
            Detalle de la nueva notificacion 
            <img 
            className="imginfo"
            src={info}/>{" "}
            <input
              className="textTile"
              id="title"
              type="text"
              placeholder="ingresa un titulo"
            />
          </label>

          <label name="text" className="text actions">
            Texto de la notificacion{" "}
            <input
              className="textBody"
              id="text"
              type="textarea"
              placeholder="ingresa un texto de la notificacion"
            />
          </label>

          <label name="filePiker" className="filePiker actions">
            Imagen de notificacion (Opcional)
            <label
              name="filePiker"
              htmlFor="filePiker"
              className="butonPiker"
              style={{
                background: "#D1FFD5",
                padding: "4px 20px",
                width: "100px",
                height: "25px",
                color: "#1D745A",
              }}
            >
              cambiar{" "}
              <input
                id={"filePiker"}
                style={{ visibility: "hidden" }}
                type={"file"}
              />
            </label>
          </label>
          <label name="orientacionTitle ">
            Orientacion
            <div className="buttonOrientation">
              <button className="orientation">
                <img className="orientationimg" src={android} />
              </button>
              <button className="orientation">
                <img className="orientationimg" src={ios} />
              </button>
            </div>
          </label>
          <label className="programacion" name="programacion">
            programacion:{" "}
          </label>
          <div className="programmingNotify">
            <button className="now" onClick={handleNowButton}>Ahora</button>
            <button className="programmed" >
              Programado
            </button>
            <button className="personalize">
              Perzonalizar (Notif.Recurente)
            </button>
          </div>
          <div className="formCalendar">
          {isNowDate && <NowDateComponent/>}
          </div>

        </form>
      </div>
        <div>

        </div>
    </div>
  );
};

export default NewNotification;
