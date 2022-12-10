import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState({});

  return (
    <NotificationContext.Provider value={[selectedDate, setSelectedDate]}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useSelectedDate = () => useContext(NotificationContext);