import { createGlobalStyle } from 'styled-components'
import  sanchez  from "../src/assets/fonts/Sanchezregular.otf"

export const GlobalStyle = createGlobalStyle`
    /*
    #000108
    #4751FF
    #2B34EB
    #9E8007
    #EBC42A
    */
    @font-face {
        font-family: sanchez;
        src: url(${sanchez});
    }
    
    body{
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
    }
    input{
        outline: none;
        border: none;
        background-color: transparent;
    }
    button{
        cursor: pointer;
        padding: 0;
        border: none;
    }
    h1,h2,h3,h4,p{
        font-family: sanchez , Arial, sans-serif;
        font-weight: normal;
        margin: 0;
    }
    h1{
        font-size: 42px;
    }
    h2{
        font-size: 34px;
    }
    h3{
        font-size: 26px;
    }
    p{
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        letter-spacing: 2.5px;
        line-height: 25px;
    }
    a{
        text-decoration: none;
    }
    .container {
        max-width: 1110px;
        width: 90%;
        margin: 0 auto;
    }
    
`
