import styled from "styled-components";
import image from "../../assets/fotos/diary-968592_1920.jpg"


export const LoginStyle = styled.div`
    
    display: flex;
    width: 100%;
    .imagemLogin{
        background: url(${image});
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loginFrame{
        display: inline-block;
        background-color: white;
        padding: 30px;
        transition: 0.3s;
        animation-duration: 4s;
        animation-name: loginFrame;
        
    }
    @keyframes loginFrame {
            0% {background-color: transparent;}
            100% {background-color: white;}
        }
    form{
        display: inline-block;
    }
`;