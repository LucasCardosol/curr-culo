import { HeaderStyle } from "./style";

function Header() {
    return (
        <HeaderStyle>
            <div className="redes sociais">
                <ul>
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>LinkDin</a></li>
                </ul>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li><a>Portifólio</a></li>
                        <li><a>Sobre mim</a></li>
                        <li><a>Minha jornada</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    );
}

export default Header;