import React, { createContext, useState, useContext, useEffect } from "react";
import * as authSvc from "../services/auth";

interface SessionContextType {
  user: any;
  token: string;
  signIn: (_: string, __: string, ___?: (_: string | undefined) => void) => Promise<void>
  signOut: () => void
}

const SessionContext = createContext<SessionContextType>(
  undefined!
);

export const useSession = () => useContext(SessionContext)

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(undefined)
  const [token, setToken] = useState<any>(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      // Todo: on token change make a call to get profile data
      // mocking with static data for now
      setUser({
        name: 'Omar Kassar',
        email: 'omar.kassar@okstudios.io'
      })
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const signIn = async (email: string, password: string, onDone?: (err?: string | undefined) => void) => {
    await authSvc.signIn(email, password)
      .then((data: any) => {
        setToken(data.access_token);
        onDone?.();
      })
      .catch((error) => {
        onDone?.(error.response?.data?.error || error.message);
      });
  }

  const signOut = () => {
    setUser(undefined)
    setToken(undefined)
  }

  return (
    <SessionContext.Provider
      value={{ signIn, signOut, user, token }}
    >
      {children}
    </SessionContext.Provider>
  );
};
