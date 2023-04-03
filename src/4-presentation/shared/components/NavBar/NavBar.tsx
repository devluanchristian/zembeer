import { NavBarStyled } from "./styled";
import logo from "../../../../assets/icone.svg";
import perfilLogo from "../../../../assets/perfil.png";
import arrowLeft from "../../../../assets/arrow-left.png";

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="container-nav">
        <nav className="container-nav-logo">
          <ul>
            <li>
              <a>
                <img src={logo} alt="Logo" />
              </a>
            </li>
            <h6>Zembeer</h6>
          </ul>
        </nav>
        <div className="container-button">
          <div className="button-arrowLeft">
            <img src={arrowLeft} alt="" />
          </div>
        </div>
        <nav className="container-nav-perfil">
          <ul>
            <li>
              <img src={perfilLogo} alt="Perfil" />
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyled>
  );
};
export default NavBar;
