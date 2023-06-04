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
  gender: string;
  contactCity: string;
}
interface CLientContextValues {
  client: Client[];
  deleteClient: () => void;
}
export const ClientContext = createContext({} as CLientContextValues);

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [client, setClient] = useState<Client[]>([]);

  const idClient = localStorage.getItem("@IDClient:ID");

  const deleteClient = async () => {
    try {
      await api.delete(`client/${idClient}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      const response = await api.get<Client>(`client/${idClient}`);
      const clientArray = [response.data];

      setClient(clientArray);
    })();
  }, []);

  return (
    <ClientContext.Provider value={{ client, deleteClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
