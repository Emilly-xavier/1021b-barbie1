import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
   
    return(
        <>
        <header>
            <div>
                <Link to="/">Barbie</Link>
            </div>
            <nav>
                <ul>


                    <li>
                        <Link to="/">Página inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Notícias</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>

        </>
    )
} 
export default Header