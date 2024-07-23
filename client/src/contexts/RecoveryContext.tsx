import React, { createContext, useState, useContext } from "react";

interface RecoveryContextType {
  recoveryEmail: string;
  OTP: string;
  setRecoveryEmail: React.Dispatch<React.SetStateAction<string>>;
  setOTP: React.Dispatch<React.SetStateAction<string>>;
}

const RecoveryContext = createContext<RecoveryContextType>(
  undefined!
);

export const useRecovery = () => useContext(RecoveryContext)

export const RecoveryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");
  const [OTP, setOTP] = useState<string>("");

  return (
    <RecoveryContext.Provider
      value={{ recoveryEmail, setRecoveryEmail, OTP, setOTP }}
    >
      {children}
    </RecoveryContext.Provider>
  );
};
