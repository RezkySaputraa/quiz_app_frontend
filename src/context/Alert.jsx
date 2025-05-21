import { createContext, useContext, useState } from "react";

const AlertContext = createContext();
function AlertProvider({ children }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <AlertContext.Provider value={{ isAlertOpen, setIsAlertOpen }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext);
export default AlertProvider;
