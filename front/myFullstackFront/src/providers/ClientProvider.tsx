import React, { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  setEditingContact: React.Dispatch<React.SetStateAction<Contact | null>>;
  handleEditContact: () => Promise<void>;
  editingContact: Contact | null;
  contacts: Contact[];
}
export const ClientContext = createContext({} as CLientContextValues);

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [client, setClient] = useState<Client[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const idClient = localStorage.getItem("@IDClient:ID");
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleEditContact = async () => {
    try {
      if (!editingContact) {
        return;
      }

      const res = await api.patch(
        `/contact/${editingContact.id}`,
        editingContact
      );
      const updatedContact = res.data;

      setEditingContact(null);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
      toast.success("Infos updated!");
    } catch (error) {
      toast.error("Error!");
    }
  };

  return (
    <ClientContext.Provider
      value={{
        client,
        setContacts,
        editingContact,
        setEditingContact,
        handleEditContact,
        contacts,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
