import React, { createContext, useState, useContext } from "react";

interface RecoveryContextType {
  recoveryEmail: string;
  setRecoveryEmail: React.Dispatch<React.SetStateAction<string>>;
  OTP: string;
  setOTP: React.Dispatch<React.SetStateAction<string>>;
}

const RecoveryContext = createContext<RecoveryContextType | undefined>(
  undefined
);

export const useRecovery = () => {
  const context = useContext(RecoveryContext);
  if (!context) {
    throw new Error("useRecovery must be used within a RecoveryProvider");
  }
  return context;
};

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
