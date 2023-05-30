import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../services/api";

interface ClientProviderProps {
  children: ReactNode;
}
export interface Client {
  id: string;
  clientName: string;
  phone: string;
  gender: string;
  dateRegister: string;
  clientCity: string;
  clientPhoto: string;
  email: string;
  contact: Contact[];
}
export interface Contact {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  dateRegister: string;
  gender: string;
  contactCity: string;
  client: Client[];
}
interface CLientContextValues {
  client: Client[];
}
export const ClientContext = createContext({} as CLientContextValues);

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [client, setClient] = useState<Client[]>([]);

  useEffect(() => {
    (async () => {
      const idClient = localStorage.getItem("@IDClient:ID");
      const response = await api.get<Client>(`client/${idClient}`);
      const clientArray = [response.data];

      setClient(clientArray);
    })();
  }, []);

  return (
    <ClientContext.Provider value={{ client }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
