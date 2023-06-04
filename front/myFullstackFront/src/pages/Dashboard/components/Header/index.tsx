import { StyledHeader } from "./style";

import { useState } from "react";
import dropdown from "../../../../assets/dropdownmenu.png";
import closeDrop from "../../../../assets/closedropmenu.png";
import { GoDiffRenamed } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { Client } from "../../../../providers/ClientProvider";
import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  client: Client[];
  toggleModalDeleteClient: () => void;
}

const Header = ({ client, toggleModalDeleteClient }: HeaderProps) => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <StyledHeader>
      {client.map((item) => {
        return (
          <div className="header">
            <div className="allign-header">
              <img src={item.clientPhoto} alt="" />
              <h3>{item.clientName}</h3>;
            </div>
            {!active ? (
              <button onClick={showMenu}>
                <img src={dropdown} alt="menu" />
              </button>
            ) : (
              <button onClick={showMenu}>
                <img src={closeDrop} alt="closeMenu" />
              </button>
            )}
          </div>
        );
      })}
      {active ? (
        <nav>
          <ul>
            {client.map((item) => {
              return (
                <React.Fragment>
                  <li>
                    <span>
                      <GoDiffRenamed />
                    </span>
                    <h4 className="hoverUnderLineAnimation">
                      {item.clientName}
                    </h4>
                  </li>
                  <li>
                    <span>
                      <MdLocationCity />
                    </span>
                    <h4 className="hoverUnderLineAnimation">
                      {item.clientCity}
                    </h4>
                  </li>
                  <li>
                    <span>
                      <BsFillPhoneVibrateFill />
                    </span>
                    <h4 className="hoverUnderLineAnimation">
                      Your number: {item.phone}
                    </h4>
                  </li>
                  <div className="buttonDelete">
                    <button
                      className="deleteClient"
                      onClick={() => toggleModalDeleteClient()}
                    >
                      Want to delete your account? <span>click here!</span>
                    </button>
                    <button
                      className="logout"
                      onClick={() => {
                        navigate("/");
                        localStorage.clear();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </StyledHeader>
  );
};

export default Header;
