import { Link } from 'react-router-dom';
import logo from '../images/LOGO.png'
export default function Header() {
    return (
        <header className="App-header">
            <div className='logo-nav'>
                <img src={logo} alt="logo de Kasa" />
                {/* <h1>
                    Kasa
                </h1> */}
                <nav >
                    <ul>
                        <li><Link to="/">accueil</Link></li>
                        <li><Link to="/about">à propos</Link></li>
                        {/* <li><Link to="/testaccordeon">test</Link></li> */}

                    </ul>
                </nav>
            </div>
        </header>
    )
}
