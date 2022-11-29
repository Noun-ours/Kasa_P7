import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="App-header">
            <div className='logo-nav'>
                <img src="./images/LOGO.png" alt="" />
                <h1>
                    Kasa
                </h1>
                <nav >
                    <ul>
                        <li><Link to="/">accueil</Link></li>
                        <li><Link to="/about">à propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
