import {Divs} from './style';
import img1 from '../../images/image 30.svg';
import img2 from '../../images/image 33.svg';
import seta from "../../images/chevron-left.svg";
export interface Imgs{
    url?: string;
}

function ImagensMarte({url}:Imgs){
    return(
        <Divs>
            <div className="desc">
                <img src={url} alt="logo menor" />
                <h3>O caminho para tornar a humanidade multiplanetária.</h3>
                <button>Inscreva-se agora</button>
            </div>
            <div className="galeria">
                <div className="seta">
                    <img src={seta} alt="seta para esquerda" />
                </div>
                <div className="imagens">
                    <img src={img1} alt="imagem de marte" />
                    <img src={img2} alt="imagem de marte" />
                </div>
            </div>
        </Divs>
    )
}
export default ImagensMarte;