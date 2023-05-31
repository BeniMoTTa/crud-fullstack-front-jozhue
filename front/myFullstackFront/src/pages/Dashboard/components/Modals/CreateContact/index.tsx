import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { contactData, contactSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../../services/api";
import { Contact } from "../../../../../providers/ClientProvider";
import Modals from "../../../../components/Modals";
import { StyledModalCreate } from "./style";

interface ModalCreateProps {
  toggleModalCreate: () => void;
  setContact: Dispatch<SetStateAction<Contact[]>>;
}

const ModalCreateContact = ({
  toggleModalCreate,
  setContact,
}: ModalCreateProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const { register, handleSubmit } = useForm<contactData>({
    resolver: zodResolver(contactSchema),
  });

  const createContact = async (data: contactData) => {
    const response = await api.post<Contact>("/contact", { ...data });

    setContact((previousContact) => [response.data, ...previousContact]);
    toggleModalCreate();
  };
  return (
    <Modals toggleModal={toggleModalCreate}>
      <StyledModalCreate>
        <h3>Create your contact</h3>
        <form onSubmit={handleSubmit(createContact)}>
          <div className="wrap-input">
            <input
              type="text"
              id="contactName"
              className={name !== "" ? "has-val input" : "input"}
              value={name}
              {...register("contactName")}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Name"></span>
          </div>
          <div className="wrap-input">
            <input
              type="email"
              id="email"
              className={email !== "" ? "has-val input" : "input"}
              value={email}
              {...register("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input
              type="tel"
              id="contactCity"
              className={city !== "" ? "has-val input" : "input"}
              value={city}
              {...register("contactCity")}
              onChange={(e) => setCity(e.target.value)}
            />
            <span className="focus-input" data-placeholder="City"></span>
          </div>

          <div className="wrap-select">
            <span className="focus-select">What's your gender</span>
            <select id="gender" className="select" {...register("gender")}>
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
              className={phone !== "" ? "has-val input" : "input"}
              value={phone}
              {...register("phone")}
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
      </StyledModalCreate>
    </Modals>
  );
};

export default ModalCreateContact;
