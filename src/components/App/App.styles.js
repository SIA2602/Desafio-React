import styled from 'styled-components'
import bg from '../../assets/img/bg.svg'

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #F8F5EC;   
    background-image: url(${bg}); 
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    height: 574px;
    width: 734px;
    background-color: #FFFF;   
    border-radius: 20px; 
    box-shadow: 0 3px 10px rgba(0,0,0,.15);    
`