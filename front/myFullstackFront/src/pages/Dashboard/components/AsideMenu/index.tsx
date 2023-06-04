import { AsideFooter, ButtonDiv, StyledAside } from "./style";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HiOutlineGlobe } from "react-icons/hi";
import { IoLogoJavascript, IoIosContact } from "react-icons/io";
import { GoDiffRenamed } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { Client } from "../../../../providers/ClientProvider";

interface AsideProps {
  client: Client[];
  toggleModalDeleteClient: () => void;
}

const AsideMenu = ({ client, toggleModalDeleteClient }: AsideProps) => {
  return (
    <StyledAside>
      {client?.map((item) => {
        return (
          <>
            <div className="headerAside" key={item.id}>
              <img src={item.clientPhoto} alt="" />
            </div>
            <ButtonDiv>
              <div className="icons-select">
                <span>
                  <GoDiffRenamed />
                </span>
                <h3
                  className="hoverUnderLineAnimation"
                  style={{ fontSize: "25px" }}
                >
                  {item.clientName}
                </h3>
              </div>
              <div className="icons-select">
                <span>
                  <MdLocationCity />
                </span>
                <h5 className="hoverUnderLineAnimation">{item.clientCity}</h5>
              </div>
              <div className="icons-select">
                <span>
                  <BsFillPhoneVibrateFill />
                </span>
                <h5 className="hoverUnderLineAnimation">Your number:</h5>
              </div>
              <h6 className="upgradeNumber"> {item.phone}</h6>
              <button
                className="deleteClient"
                onClick={() => toggleModalDeleteClient()}
              >
                Want to delete your account? <span>click here!</span>
              </button>
            </ButtonDiv>
          </>
        );
      })}
      <AsideFooter>
        <div className="socialMedia">
          <span className="react-icon">
            <FaReact />
          </span>
          <span className="typescript">
            <SiTypescript />
          </span>
          <span className="react-icon">
            <HiOutlineGlobe />
          </span>
          <span className="typescript">
            <IoLogoJavascript />
          </span>
          <span className="react-icon">
            <IoIosContact />
          </span>
        </div>
      </AsideFooter>
    </StyledAside>
  );
};
export default AsideMenu;
