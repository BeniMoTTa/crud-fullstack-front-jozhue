import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

interface Client {
  id: string;
  clientName: string;
  phone: string;
  gender: string;
  dateRegister: string;
  contact: Contact[];
}
interface Contact {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  dateRegister: string;
  gender: string;
}

const ClientProvider = () => {
  const [client, setClient] = useState<Client[]>([]);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const getClient = () => {
      const tokenValidate = localStorage.getItem("@keySecret:token")(
        async () => {
          const response = await api.get<Client[]>(`/client/${id}`);
          setClient(response.data);
        }
      )();
    };
    getClient();
  }, []);

  return <div></div>;
};

export default ClientProvider;
