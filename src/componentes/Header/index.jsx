import Logo from '../../Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { StyleComponentHeader } from './style';

export function HeaderHome(){

    

    return(

        <StyleComponentHeader>
                <img  src={Logo} alt='logo' />
                <Link  to="/"> Voltar </Link>
        </StyleComponentHeader>

    )
}