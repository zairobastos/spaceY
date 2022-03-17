import { Div } from "./style";
import Ingresso from "../../images/Icon_ticket.svg"
import Foguete from "../../images/Rocket_illustra.svg";

function Formulario() {
    return(
        <Div>
            <div className="ingresso">
                <form action="">
                    <figure>
                        <img src={Ingresso} alt="icone do ingresso" />
                    </figure>
                    <div className="txt">
                        <h3>Garanta sua vaga para a primeira viagem</h3>
                        <p>Preencha os campos abaixo para entrar na lista de espera</p>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="nome">Seu nome</label>
                            <input type="text" name="nome" id="nome" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" />
                        </div>
                        <div className="marque">
                            <input type="checkbox" name="check" id="check" />
                            <label htmlFor="check">Concordo em receber comunicações</label>
                        </div>
                    </div>
                    <button>Garantir minha vaga</button>
                </form>
            </div>
            <figure>
                <img src={Foguete} alt="" />
            </figure>
        </Div>
    )
}

export default Formulario;