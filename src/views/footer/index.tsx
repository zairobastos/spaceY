import Nuvens from "../../images/Smoke_footer.svg";
import Logo from "../../images/Logo.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin-in.svg";
import Facebook from "../../images/facebook-square.svg";
import {Rodape} from "./style";
function Footer(){
    return(
        <Rodape>
            <figure>
                <img src={Nuvens} alt="nuvens" />
            </figure>
            <div className="footer">
                <figure>
                    <img src={Logo} alt="" />
                </figure>
                <div className="sociais">
                    <img src={Instagram} alt="Instagram" />
                    <img src={Linkedin} alt="Linkedin" />
                    <img src={Facebook} alt="Facebook" />
                </div>
                <div className="menu">
                    <p>Início</p>
                    <p>Sobre Nós</p>
                    <p>Missões</p>
                    <p>Contato</p>
                </div>
            </div>
        </Rodape>
    )
}

export default Footer;