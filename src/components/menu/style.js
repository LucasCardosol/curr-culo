import styled from "styled-components";

export const MenuStyle = styled.div`
    /*
    #000108
    #4751FF
    #2B34EB
    #9E8007
    #EBC42A
    #E0E0E0
    */
    width: 277.5px;
    height: 100vh;
    background-color: #000108;
    position: fixed;
    border-right: #4751FF solid 0.8px;
    .User{
        height: 277.5px;
    }
    .menuButton{
        width: 100%;
        padding: 5px 5px ;
        color:#E0E0E0;
        border-bottom: #4751FF solid 0.8px;
        background-color: #000108;
        text-align: left;
        margin-bottom: 30px;
        transition: 0.3s;
        :hover{
            padding-left:15px;
            color:#4751FF;
        }
        :focus{
            color: #9E8007;
            padding-left: 30px;
            border-bottom: #9E8007 solid 0.8px;
        }
    }
`;