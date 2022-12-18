import React, { useEffect } from "react";
import { messaging } from "../firebase/firebase";
import { getToken, onMessage } from "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Notification from "./Notification/Notification";


export function Push() {

  const messageActivation = async () => {
    const token = await getToken(messaging, {
      vapidKey: "BHvYUDbp0WKzFQPwcHIBLUWvIHcPHSSIxDW7s-mLNLh2x69sIdADIi3ttEp1f0rxniTBLpp__DjENbLYBWONatE"
    }).catch(error => console.log("Tuviste un error al generar el Token"));

    if (token) {
      alert (token);
      console.log(token)
    } ;
    if(!token) console.log ("no tienes Token");
  }

  useEffect (()=>{
    onMessage(messaging, message =>{
      toast(message.notification?.title)
    })
  }, []);
  return (
    <div className="pushContainer">
      <div className="pushTitle">
        <h1>Push</h1>
        <ToastContainer />
        <button onClick={messageActivation}>Generar Token</button>
      </div>
      <Notification />
    </div>
  );
}
