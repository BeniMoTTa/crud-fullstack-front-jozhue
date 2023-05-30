import { useEffect, useState } from "react";
import { api, apiImage } from "../../services/api";
import { Container } from "../../styles/container";
import AsideMenu from "./components/AsideMenu";
import Header from "./components/Header";
import { StyledDashboard } from "./style";
import { MdDelete } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import maleFigure from "../../assets/male figure.jpg";
import femaleFigure from "../../assets/Female desenhoi.jpg";
import NoBinary from "../../assets/nobinary flag.png";
import noSay from "../../assets/NoSay.gif";
import { CiEdit } from "react-icons/ci";
import "./animation.css";
import { Client, Contact } from "../../providers/ClientProvider";
import { useClient } from "../../hooks/clientAuth";
import ModalCreateContact from "./components/Modals";

const Dashboard = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [client, setClient] = useState<Client[]>([]);
  const [contact, setContact] = useState<Contact[]>([]);
  const [filter, setFilter] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const idClient = localStorage.getItem("@IDClient:ID");

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const apiKey = "66iuuxcsVoQmd44vgbbBEQh0JNMuWMk4pR6JN1MJ9kHBWX9h1goLEp6U";
  useEffect(() => {
    (async () => {
      const response = await api.get<Client>(`client/${idClient}`);
      const clientArray = [response.data];
      setClient(clientArray);
    })();
    (async () => {
      const response = await api.get<Client>(`client/${idClient}`);
      const contactArray = response.data.contact;
      const flattenedContactArray = contactArray.flat();
      setContact(flattenedContactArray);
    })();

    const fetchImage = async () => {
      const response = await apiImage.get(
        `${Math.floor(Math.random() * 100) + 1}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = response.data;

      setImageUrl(
        data.photos[Math.floor(Math.random() * data.photos.length)].src.original
      );
    };
    fetchImage();
    const intervalId = setInterval(fetchImage, 30000);
    return () => clearInterval(intervalId);
  }, []);
  const contactFiltered = contact.filter(
    (contacts) =>
      contacts.contactName.toLowerCase().includes(filter.toLowerCase()) ||
      contacts.contactCity.toLowerCase().includes(filter.toLowerCase()) ||
      contacts.email.toLowerCase().includes(filter.toLowerCase()) ||
      contacts.phone.includes(filter)
  );

  return (
    <Container>
      <AsideMenu />
      <Header />
      <StyledDashboard>
        <div
          className="container-general"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {client?.map((elem) => (
            <main className="main-choice" key={elem.id}>
              <header className="painel-header">
                <h3 className="title-header">Contacts</h3>
                <button className="create" onClick={toggleModal}>
                  <IoIosContact onClick={toggleModal} />
                </button>
              </header>
              <div className="area-search">
                <div className="search">
                  <span>
                    <BiSearchAlt2 />
                  </span>
                  <input
                    type="text"
                    placeholder="Search your contacts..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </div>
              <section className="contacts-painel">
                <ul>
                  {contactFiltered.map((contact) => (
                    <li key={contact.id}>
                      <img
                        src={
                          contact.gender === "male"
                            ? maleFigure
                            : contact.gender === "female"
                            ? femaleFigure
                            : contact.gender === "no binary"
                            ? NoBinary
                            : noSay
                        }
                        alt=""
                      />
                      <div className="area-info-contact">
                        <h4>{contact.contactName}</h4>
                        <div className="info-contact">
                          <div className="allign">
                            <p className="email">Email: </p>
                            <span className="text-info" id="email">
                              {" "}
                              {contact.email}
                            </span>
                          </div>
                          <div className="allign">
                            <p className="phone">Phone:</p>
                            <span className="text-info"> {contact.phone}</span>
                          </div>
                          <div className="allign">
                            <p className="city">City:</p>
                            <span className="text-info" id="city">
                              {contact.contactCity}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="btn-contact">
                        <button className="delete">
                          <MdDelete />
                        </button>
                        <button className="edit">
                          <CiEdit />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          ))}
        </div>
        {modalIsOpen && <ModalCreateContact toggleModal={toggleModal} />}
      </StyledDashboard>
    </Container>
  );
};

export default Dashboard;
