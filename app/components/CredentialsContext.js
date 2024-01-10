import { createContext } from "react";

export const CredentialsContext = createContext({
    storedCredentials: { phone_number: '', user_id: '' },
    setStoredCredentials: () => {},
  });