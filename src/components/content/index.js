import { useState } from "react";
import { ContentStyle } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import livro from "../../assets/fotos/livro.jpg"
import asi from "../../assets/fotos/diary-968592_1920.jpg"
import cafe from "../../assets/fotos/cafe.jpg"

const searchIcon = <FontAwesomeIcon icon={faSearch} />
const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
const arrowRight = <FontAwesomeIcon icon={faChevronRight} className="icon"/>



const ProjectItem = (props) => {
  
  const [photoPosition,getPhotoPosition] = useState(0)
  const lengthPhotos = props.photosList.length-1

  const changePhoto = (side) => {
    
    if (side==="left"){
      if (photoPosition-1 < 0){
        getPhotoPosition(lengthPhotos)
      }else{
        getPhotoPosition(photoPosition-1)
      }
    }
    else if (side==="right"){
      if (photoPosition+1 > lengthPhotos){
        getPhotoPosition(0)
      }else{
        getPhotoPosition(photoPosition+1)
      }
    }
  }

  return (
    <div className= {props.class}>
      <div className = "square">
        <button className="left" onClick={() => changePhoto('left')}>{arrowLeft}</button>
        <img src={props.photosList[photoPosition]} alt="Minha Figura" />
        <button className="right" onClick={() => changePhoto('right')}>{arrowRight}</button>
      </div>
      <p>Considerando que temos bons administradores de rede, a implementação do código agrega valor ao serviço prestado dos índices pretendidos. Assim mesmo, a complexidade computacional cumpre um papel essencial na implantação da autenticidade das informações.</p>
    </div>
  )
} 

function Content() {
    return (
      <ContentStyle>
        <div className="content container">
          <ProjectItem class="cardContent" photosList={[asi,livro, cafe]}/>
          <ProjectItem class="cardReverse" photosList={[asi,livro, cafe]}/>
          <ProjectItem class="cardContent" photosList={[asi,livro, cafe]}/>
          <ProjectItem class="cardReverse" photosList={[asi,livro, cafe]}/>
        </div>
      </ContentStyle>
    );
  }
  
  export default Content;
  