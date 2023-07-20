import styled from 'styled-components'

import Background from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, 
     rgba(255, 255, 255, 0.6) 0.84%,
     rgba(255, 255, 255, 0.6) 0.85%, 
     rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 38px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(22.5px);
    height: 100%;
    min-height: 100vh;
`;

export const Button = styled.button`

    width: 342px;
    height: 74px;
    margin-top: 125px;
    background: transparent;
   

    border-radius: 14px;
    border: 1px solid #FFFFFF;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img {
        transform: rotate(180deg);
    }
`;

export const User = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border:none;
    outline: none;
    margin-top: 20px;
    
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }

    button{
        border: none;
        background: none;
        cursor: pointer;
    }
 

`;
