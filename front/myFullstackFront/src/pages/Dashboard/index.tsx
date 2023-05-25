import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

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
const Dashboard = () => {
  const [client, setClient] = useState<Client[]>([]);
  useEffect(() => {
    const getClient = () => {
      (async () => {
        const clientId = localStorage.getItem("userId");

        const response = await api.get<Client[]>(`client/${clientId}`);
        setClient(response.data);
      })();
    };
    getClient();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      {client.map((item) => (
        <div key={item.id}>
          <p>{item.clientName}</p>
          <p>{item.phone}</p>
          <p>{item.gender}</p>
          <p>{item.dateRegister}</p>
          {item.contact.map((contact) => (
            <div key={contact.id}>
              <p>{contact.contactName}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.gender}</p>
              <p>{contact.dateRegister}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
