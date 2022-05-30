import { MenuStyle } from "./style";

function Menu() {
    return (
      <MenuStyle>
          <div className="User"></div>
          <div className="Buttons">
              <button className="menuButton"><p>Novo Texto</p></button>
              <button className="menuButton"><p>Adicionar pasta</p></button>
              <button className="menuButton"><p>Diário</p></button>
              <button className="menuButton"><p>home</p></button>
              <button className="menuButton"><p>navega</p></button>


          </div>
      </MenuStyle>
    );
  }
  
  export default Menu;
  