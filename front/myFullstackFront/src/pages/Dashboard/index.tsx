import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

interface Client {
  id: string;
  clientName: string;
  phone: string;
  gender: string;
  dateRegister: string;
  clientCity: string;
  clientPhoto: string;
  contact: Contact[];
}
interface Contact {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  dateRegister: string;
  gender: string;
  contactPhoto: string;
}
const Dashboard = () => {
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
    <div>
      <h1>Dashboard</h1>
      {client.map((item) => (
        <div key={item.id}>
          <p>{item.clientName}</p>
          <p>{item.phone}</p>
          <p>{item.gender}</p>
          <p>{item.dateRegister}</p>
          <p>{item.clientCity}</p>
          <p>{item.clientPhoto}</p>
          {item.contact.map((contact) => (
            <div key={contact.id}>
              <p>{contact.contactName}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.gender}</p>
              <p>{contact.dateRegister}</p>
              <p>{contact.contactPhoto}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
