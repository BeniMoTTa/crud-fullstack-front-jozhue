import { AsideFooter, ButtonDiv, StyledAside } from "./style";
import maluco from "../../../../assets/download.jpeg";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { HiOutlineGlobe } from "react-icons/hi";
import { IoLogoJavascript, IoIosContact } from "react-icons/io";
import { GoDiffRenamed } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

const AsideMenu = () => {
  return (
    <StyledAside>
      <div className="headerAside">
        <img src={maluco} alt="" />
      </div>
      <ButtonDiv>
        <div className="icons-select">
          <span>
            <GoDiffRenamed />
          </span>
          <h3 className="hoverUnderLineAnimation" style={{ fontSize: "25px" }}>
            Sacy Maluco
          </h3>
        </div>
        <div className="icons-select">
          <span>
            <MdLocationCity />
          </span>
          <h5 className="hoverUnderLineAnimation">São Paulo</h5>
        </div>
        <div className="icons-select">
          <span>
            <BsFillPhoneVibrateFill />
          </span>
          <h5 className="hoverUnderLineAnimation">Your number:</h5>
        </div>
        <h6 className="upgradeNumber"> 73 99389283123</h6>
      </ButtonDiv>
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
