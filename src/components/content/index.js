import { ContentStyle } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import livro from "../../assets/fotos/livro.jpg"
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
const arrowRight = <FontAwesomeIcon icon={faChevronRight} className="icon"/>

const ProjectItem = (props) => {
  return (
    <div className= {props.class}>
      <div className = "square">
        <button className="left">{arrowLeft}</button>
        <img src={livro} alt="Minha Figura" />
        <button className="right">{arrowRight}</button>
      </div>
      <p>Considerando que temos bons administradores de rede, a implementação do código agrega valor ao serviço prestado dos índices pretendidos. Assim mesmo, a complexidade computacional cumpre um papel essencial na implantação da autenticidade das informações.</p>
    </div>
  )
} 

function Content() {
    return (
      <ContentStyle>
        <header>
          <div className="container">
          </div>
        </header>
        <div className="content container">
          <ProjectItem class="cardContent"/>
          <ProjectItem class="cardReverse"/>
          <ProjectItem class="cardContent"/>
          <ProjectItem class="cardReverse"/>
          <ProjectItem class="cardContent"/>
        </div>
      </ContentStyle>
    );
  }
  
  export default Content;
  