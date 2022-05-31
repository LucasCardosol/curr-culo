import styled from "styled-components";
import livro from "../../assets/fotos/header2.png"
import asi from "../../assets/fotos/asi.png"
export const ContentStyle = styled.div`
    /*
    #000108
    #4751FF
    #2B34EB
    #9E8007
    #EBC42A
    #E0E0E0
    *//* Rectangle 5 */


    header{
        height: 277.5px;
        background: url(${livro});
        background-size:cover ;
        width: 100%;
    }
    .square{
        position: relative;
        width: 240px;
        height: 180px;
        background-color: black;
        transition: 0.7s;
        z-index: 10;
        background: url(${asi});
        background-size: cover;
        img{
            width: 100%;
            height: auto;
            background-size: cover;
        }
        .left{
            top: calc(50% - 13px);
            left: 2px
        }
        .right{
            top: calc(50% - 13px);
            right: 2px
        }
        button{
            position: absolute;
            display: inline-block;
            height: 26px;
            padding: 5px;
            background-color: transparent;
            .icon{
                font-size: 24px;
                color: rgba(0,0,0,0.25);
                transition: 0.7s;
                
            }
        }
        :hover{
            width: 480px;
            height: 360px;
            .icon{
                color: black;
            }
        }
    }
    .content{
        margin-top: 240px;
    }
    .cardContent{
        display: flex;
        width: 75%;
        p{
            width: 40%;
            margin-left: 270px;
        }
    }
    .cardReverse{
        display: flex;
        flex-direction: row-reverse;
        width: 75%;
        margin-left: auto;
        p{
            width: 40%;
            margin-right: 270px;
            text-align: right;
            
        }
    }
    .cardReverse , .cardContent{
        height: 360px;
        margin-bottom: 60px;
        p{
            position: absolute;
        }
    }
`;