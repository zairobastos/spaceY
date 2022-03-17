import {Image, Divicons, Text} from './style';

export interface Data{
    url: string;
    txt?: string;
}

function Card({url,txt}:Data){
    return(
        <Divicons>
            <Image url={url}/>
            <Text>
                {txt}
            </Text>
        </Divicons>
    )
}
export default Card;