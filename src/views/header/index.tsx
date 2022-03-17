import Logo from "../../images/Logo.svg";
import Planeta from "../../images/home-mars-right.svg";
import {Cabecalho, Div,Infos} from './style';
import Card from '../../components/card/index'

function Header(){
    return(
        <Div>
            <Cabecalho>
                <img src={Logo} alt="Logo: Spacy" />
            </Cabecalho>
            <section>
                <div className="desc">
                    <div className="apresentacao">
                        <p className="atencao">Finalmente é possível!</p>
                        <h1>Sua jornada para Marte começa aqui<span>.</span></h1>
                        <p className="texto">A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. 
                        Inscreva-se em nossa lista de espera. </p>
                        <button>Inscreva-se agora</button>
                    </div>
                    <figure>
                        <img src={Planeta} alt="" />
                    </figure>
                </div>
                <Infos>
                    <Card url="assets/Icon01.svg" txt="Foguetes com a mais alta tecnologia e conforto."/>
                    <Card url="assets/Icon02.svg" txt="Mais de 100 missões consecutivas com sucesso."/>
                    <Card url="assets/Icon03.svg" txt="Experiencia única e exclusiva."/>
                </Infos>
            </section>
        </Div>
    )
}

export default Header;