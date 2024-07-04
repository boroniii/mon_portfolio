import './Header.scss';

function Header(){

    return(
        <header className="header">

            <nav className="header__nav">
                <ul className="header__nav__ul">
                    <li className="header__nav__li">
                        <a className='header__nav__a' href="#accueil">Accueil</a>
                    </li>
                    <li className="header__nav__li">
                        <a className='header__nav__a' href='#presentation'>Presentation</a>
                    </li>
                    <li className="header__nav__li">
                        <a className='header__nav__a' href='#projets_intro'>Projets</a>
                    </li>
                    <li className="header__nav__li">
                        <a className='header__nav__a' href='#competences'>Compétences</a>
                    </li>
                    <li className="header__nav__li">
                        <a className='header__nav__a' href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header