import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Contact } from "../../../../../providers/ClientProvider";
import { api } from "../../../../../services/api";
import Modals from "../../../../components/Modals";
import { StyledUpdateContact } from "./style";

import { contactData, contactSchema } from "../CreateContact/validator";

interface ModalUpdateProps {
  toggleModalUpdate: () => void;
  contact: Contact;
}

const ModalUpdateContact = ({
  toggleModalUpdate,
  contact,
}: ModalUpdateProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(contact.gender);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const { register, handleSubmit } = useForm<contactData>({
    resolver: zodResolver(contactSchema),
  });

  const editContact = async (data: contactData) => {
    const response = await api.patch<contactData>(
      `contact/${contact.id}`,
      data
    );
  };

  const submit = async (data: contactData) => {
    const oldContact = { ...data };
    await editContact(oldContact);
    toggleModalUpdate();
  };

  return (
    <Modals toggleModal={toggleModalUpdate}>
      <StyledUpdateContact>
        <h3>Editor</h3>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <div className="wrap-input">
            <input
              type="text"
              id="contactName"
              className={
                name !== "" || contact.contactName !== ""
                  ? "has-val input"
                  : "input"
              }
              value={name}
              {...register("contactName")}
              placeholder={contact.contactName}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Name"></span>
          </div>
          <div className="wrap-input">
            <input
              type="email"
              id="email"
              className={
                name !== "" || contact.email !== "" ? "has-val input" : "input"
              }
              value={email}
              {...register("email")}
              placeholder={contact.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input
              type="tel"
              id="contactCity"
              className={
                name !== "" || contact.contactCity !== ""
                  ? "has-val input"
                  : "input"
              }
              value={city}
              {...register("contactCity")}
              placeholder={contact.contactCity}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="focus-input" data-placeholder="City"></span>
          </div>

          <div className="wrap-select">
            <span className="focus-select">What's your gender</span>
            <select
              id="gender"
              className="select"
              {...register("gender")}
              value={gender}
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
                name !== "" || contact.phone !== "" ? "has-val input" : "input"
              }
              value={phone}
              {...register("phone")}
              placeholder={contact.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Phone"></span>
          </div>
          <div className="div-btn-login">
            <button type="submit" className="btn-login">
              Confirm
            </button>
          </div>
        </form>
      </StyledUpdateContact>
    </Modals>
  );
};

export default ModalUpdateContact;
