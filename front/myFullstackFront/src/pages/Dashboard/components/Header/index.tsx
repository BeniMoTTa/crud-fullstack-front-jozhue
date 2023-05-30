import { StyledHeader } from "./style";
import babao from "../../../../assets/download.jpeg";
import { useState } from "react";
import dropdown from "../../../../assets/dropdownmenu.png";
import closeDrop from "../../../../assets/closedropmenu.png";
import { GoDiffRenamed } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <StyledHeader>
      <div className="header">
        <div className="allign-header">
          <img src={babao} alt="" />
          <h3>Sacy Maluco</h3>
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
      {active ? (
        <nav>
          <ul>
            <li>
              <span>
                <GoDiffRenamed />
              </span>
              <h4 className="hoverUnderLineAnimation">Sacy Maluco</h4>
            </li>
            <li>
              <span>
                <MdLocationCity />
              </span>
              <h4 className="hoverUnderLineAnimation">São Paulo</h4>
            </li>
            <li>
              <span>
                <BsFillPhoneVibrateFill />
              </span>
              <h4 className="hoverUnderLineAnimation">
                Your number: 73 99892839
              </h4>
            </li>
          </ul>
        </nav>
      ) : null}
    </StyledHeader>
  );
};

export default Header;
