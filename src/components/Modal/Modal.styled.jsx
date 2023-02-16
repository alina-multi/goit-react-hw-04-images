import styled from '@emotion/styled';
import { Button } from 'components/Button/Button.styled';


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    `;
    

export const ModalWindow = styled.div`
    position: absolute;
    width: 100%;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;`

export const ButtonArrow = styled.button`
    background-color: transparent;
    display: inline-block;
    border: none;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #fff;
    &:hover,
    &:focus {
        color: #3f51b5;
        outline: none;`


export const ModalClose = styled.button`
position: absolute;
top: 0;
right: 0;
width: 50px;
height: 50px;
background-color: transparent;
border: none;   
font-size: 30px;
font-weight: 700;
color: #fff;
cursor: pointer;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,    
&:focus {
    color: #3f51b5;
    outline: none;
}
`