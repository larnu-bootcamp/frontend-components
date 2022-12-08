import React, { useState } from "react";
import android from "../../assets/android.png";
import ios from "../../assets/ios.png";
import "./css/newNotification.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import info from "../../assets/info.png";

function NowDateComponent() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
      <input className="timeNow" type={"time"} />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="Pp"
        inline
      />
    </React.Fragment>
  );
}

function ProgrammedDateComponent() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
      <input className="dateProgrammed" type={"date"} />
      <p>a las</p>
      <input className="timeProgrammed" type={"time"} />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="Pp"
        inline
      />
    </React.Fragment>
  );
}

function PersonalizeDateComponent () {
  
  
  return(
    <React.Fragment>
    <table>
      <div class="roundchk">
			<input name="Domingo" type="checkbox" id="checkbox-dom" value="Dom"/>
			<label for="checkbox-Dom"> D </label>
		  </div>
      <div class="roundchk">
			<input name="Lunes" type="checkbox" id="checkbox-lun" value="Lun"/>
			<label for="checkbox-lun"> L </label>
		  </div>
      <div class="roundchk">
			<input name="Martes" type="checkbox" id="checkbox-mar" value="Mar"/>
			<label for="checkbox-mar"> M </label>
		  </div>
      <div class="roundchk">
			<input name="Miercoles" type="checkbox" id="checkbox-mie" value="Mie"/>
			<label for="checkbox-mie"> M </label>
		  </div>
      <div class="roundchk">
			<input name="Jueves" type="checkbox" id="checkbox-jue" value="Jue"/>
			<label for="checkbox-jue"> J </label>
		  </div>
      <div class="roundchk">
			<input name="Viernes" type="checkbox" id="checkbox-vie" value="Vie"/>
			<label for="checkbox-vie"> V </label>
		  </div>
      <div class="roundchk">
			<input name="Sabado" type="checkbox" id="checkbox-sab" value="Sab"/>
			<label for="checkbox-sab"> S </label>
		  </div>
    </table>
    <input className="timePersonalize" type={"time"} />
    <div>
      <p>Inicio</p>
      <p>Fin</p>
    </div>
    </React.Fragment>
  )
}

const NewNotification = () => {
  const [isNowDate, setIsNowDate] = useState(false);
  const [isProgrammedDate, setIsProgrammedDate] = useState(false);
  const [isPersonalizeDate, setIsPersonalizeDate] = useState(false);

  const handleNowButton = () => {
    setIsNowDate(true);
    setIsProgrammedDate(false);
    setIsPersonalizeDate(false)
  };

  const handleProgrammedButton = () => {
    setIsProgrammedDate(true);
    setIsNowDate(false);
    setIsPersonalizeDate(false);
  };

  const handlePersonalizeButton = () => {
    setIsPersonalizeDate(true);
    setIsProgrammedDate(false);
    setIsNowDate(false);
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
            <img className="imginfo" src={info} />{" "}
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
            <button className="now" onClick={handleNowButton}>
              Ahora
            </button>
            <button className="programmed" onClick={handleProgrammedButton}>
              Programado
            </button>
            <button className="personalize" onClick={handlePersonalizeButton}>
              Personalizar (Notif.Recurente)
            </button>
          </div>
          <div className="formCalendar">
            {isNowDate && <NowDateComponent />}
            {isProgrammedDate && <ProgrammedDateComponent />}
            {isPersonalizeDate && <PersonalizeDateComponent/>}
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default NewNotification;
