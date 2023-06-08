import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Client } from "../../../../../providers/ClientProvider";
import { api } from "../../../../../services/api";
import Modals from "../../../../components/Modals";
import { StyledUpdateContact } from "./style";

import { contactData } from "../CreateContact/validator";

import { useClient } from "../../../../../hooks/clientAuth";

interface ModalUpdateProps {
  toggleModalUpdate: () => void;
}

const ModalUpdateContact = ({ toggleModalUpdate }: ModalUpdateProps) => {
  const [client, setClient] = useState<Client[]>([]);
  const { editingContact, setEditingContact, contacts, handleEditContact } =
    useClient();

  const { handleSubmit } = useForm<contactData>();
  const fetchClientData = async () => {
    const idClient = localStorage.getItem("@IDClient:ID");

    if (idClient) {
      try {
        const res = await api.get<Client>(`client/${idClient}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@keySecret:token")}`,
          },
        });
        setClient([res.data]);
      } catch (error) {
        console.log("Error getting customer data:", error);
      }
    }
  };
  useEffect(() => {
    fetchClientData();
  }, []);

  const editContact = async () => {
    handleEditContact();
    fetchClientData();
    toggleModalUpdate();
  };

  return (
    <Modals toggleModal={toggleModalUpdate}>
      <StyledUpdateContact>
        <h3>Editor</h3>
        {client.map((elem) =>
          elem.contact.map(
            (contact) =>
              editingContact &&
              editingContact.id === contact.id && (
                <form key={contact.id} onSubmit={handleSubmit(editContact)}>
                  <div className="wrap-input">
                    <input
                      type="text"
                      className={
                        editingContact?.contactName !== ""
                          ? "has-val input"
                          : "input"
                      }
                      value={editingContact.contactName}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          contactName: e.target.value,
                        })
                      }
                    />
                    <span
                      className="focus-input"
                      data-placeholder="Name"
                    ></span>
                  </div>
                  <div className="wrap-input">
                    <input
                      type="email"
                      id="email"
                      className={
                        editingContact.email !== "" ? "has-val input" : "input"
                      }
                      value={editingContact.email}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          email: e.target.value,
                        })
                      }
                    />
                    <span
                      className="focus-input"
                      data-placeholder="Email"
                    ></span>
                  </div>
                  <div className="wrap-input">
                    <input
                      type="text"
                      id="contactCity"
                      className={
                        editingContact.contactCity !== ""
                          ? "has-val input"
                          : "input"
                      }
                      value={editingContact.contactCity}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          contactCity: e.target.value,
                        })
                      }
                    />
                    <span
                      className="focus-input"
                      data-placeholder="City"
                    ></span>
                  </div>

                  <div className="wrap-select">
                    <span className="focus-select">What's your gender</span>
                    <select
                      id="gender"
                      className="select"
                      value={editingContact?.gender}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          gender: e.target.value,
                        })
                      }
                    >
                      <option value={"#"} hidden>
                        Choose an option
                      </option>
                      <option value="uniformed">Prefer not to say</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="no binary">No Binary</option>
                    </select>
                  </div>

                  <div className="wrap-input">
                    <input
                      type="tel"
                      id="phone"
                      className={
                        editingContact.phone !== "" ? "has-val input" : "input"
                      }
                      value={editingContact.phone}
                      onChange={(e) =>
                        setEditingContact({
                          ...editingContact,
                          phone: e.target.value,
                        })
                      }
                    />
                    <span
                      className="focus-input"
                      data-placeholder="Phone"
                    ></span>
                  </div>
                  <div className="div-btn-login">
                    <button type="submit" className="btn-login">
                      Confirm
                    </button>
                  </div>
                </form>
              )
          )
        )}
      </StyledUpdateContact>
    </Modals>
  );
};

export default ModalUpdateContact;
