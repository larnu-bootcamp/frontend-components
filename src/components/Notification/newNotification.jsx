import React, { useState } from "react";
import android from "../../assets/android.png";
import ios from "../../assets/ios.png";
import "./css/newNotification.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import info from "../../assets/info.png";
import imagen from "../../assets/imagen.png";
import iconSend from "../../assets/iconSend.png"

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

function PersonalizeDateComponent() {
  return (
    <React.Fragment>
      <table className="roundCk">
        <div class="roundchk">
          <input name="Domingo" type="checkbox" id="checkbox-dom" value="Dom" />
          <label for="checkbox-Dom"> D </label>
        </div>
        <div class="roundchk">
          <input name="Lunes" type="checkbox" id="checkbox-lun" value="Lun" />
          <label for="checkbox-lun"> L </label>
        </div>
        <div class="roundchk">
          <input name="Martes" type="checkbox" id="checkbox-mar" value="Mar" />
          <label for="checkbox-mar"> M </label>
        </div>
        <div class="roundchk">
          <input
            name="Miercoles"
            type="checkbox"
            id="checkbox-mie"
            value="Mie"
          />
          <label for="checkbox-mie"> M </label>
        </div>
        <div class="roundchk">
          <input name="Jueves" type="checkbox" id="checkbox-jue" value="Jue" />
          <label for="checkbox-jue"> J </label>
        </div>
        <div class="roundchk">
          <input name="Viernes" type="checkbox" id="checkbox-vie" value="Vie" />
          <label for="checkbox-vie"> V </label>
        </div>
        <div class="roundchk">
          <input name="Sabado" type="checkbox" id="checkbox-sab" value="Sab" />
          <label for="checkbox-sab"> S </label>
        </div>
      </table>
      <input className="timePersonalize" type={"time"} />
      <div>
        <p>Inicio</p>
        <p>Fin</p>
      </div>
    </React.Fragment>
  );
}

function NotifyShowInitialComponent() {
  return (
    <div className="showInitial">
      <div className="notifyAndroidIn">
        <div className="boxAndroidIn">
          <h4>Hola mundo</h4>
          <p>esto es un texto</p>
          <div className="imageRefIn">
            <img className="imgReferenceIn" src={imagen} />
          </div>
        </div>
      </div>
      <div className="notifyIosIn">
        <div className="boxIosIn">
          <h4>Hola mundo</h4>
          <p>esto es un texto</p>
          <div className="imageRefIn">
            <img className="imgReferenceIn" src={imagen} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NotifyShowExpandedComponent() {
  return (
    <div className="showExpanded">
      <div className="notifyAndroidEx">
        <div className="boxAndroidEx">
          <h4>Hola mundo</h4>
          <p>esto es un texto</p>
          <div className="imageRef">
            <img className="imgReference" src={imagen} />
          </div>
        </div>
      </div>
      <div className="notifyIosEx">
        <div className="boxIosEx">
          <h4>Hola mundo</h4>
          <p>esto es un texto</p>
          <div className="imageRef">
            <img className="imgReference" src={imagen} />
          </div>
        </div>
      </div>
    </div>
  );
}

const NewNotification = () => {
  const [isNowDate, setIsNowDate] = useState(false);
  const [isProgrammedDate, setIsProgrammedDate] = useState(false);
  const [isPersonalizeDate, setIsPersonalizeDate] = useState(false);
  const [isShowInitial, setIsShowInitial] = useState(true);
  const [isShowExpanded, setIsShowExpanded] = useState(false);

  const handleNowButton = () => {
    setIsNowDate(true);
    setIsProgrammedDate(false);
    setIsPersonalizeDate(false);
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
  };

  const handleInitialButton = () => {
    setIsShowInitial(true);
    setIsShowExpanded(false);
  };

  const handleExpandedButton = () => {
    setIsShowExpanded(true);
    setIsShowInitial(false);
  };

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
          </label>
          <input
            className="textTile"
            id="title"
            type="text"
            placeholder="ingresa un titulo"
          />
          <label name="text" className="text actions">
            Texto de la notificacion <img className="imginfo" src={info} />
          </label>
          <input
            className="textBody"
            id="text"
            type="textarea"
            placeholder="ingresa un texto de la notificacion"
          />
          <label name="filePiker" className="filePiker actions">
            Imagen de notificacion (Opcional)
          </label>
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

          <label name="orientacionTitle " className="actions">
            Orientacion
            <img className="imginfo" src={info} />
          </label>
          <div className="buttonOrientation">
            <button className="orientation">
              <img className="orientationimg" src={android} />
            </button>
            <button className="orientation">
              <img className="orientationimg" src={ios} />
            </button>
          </div>

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
            {isPersonalizeDate && <PersonalizeDateComponent />}
          </div>
        </form>
      </div>
      <div className="notifyShow">
        <h1>Vista Previa</h1>
        <button className="buttonInitial" onClick={handleInitialButton}>
          Estado Inicial
        </button>
        <button className="buttonExpanded" onClick={handleExpandedButton}>
          Vista Expandida
        </button>
        {isShowInitial && <NotifyShowInitialComponent />}
        {isShowExpanded && <NotifyShowExpandedComponent />}
      </div>
      <button className="post">
            <img src={iconSend} className="iconsend"/> publicar
      </button>
    </div>
  );
};

export default NewNotification;
