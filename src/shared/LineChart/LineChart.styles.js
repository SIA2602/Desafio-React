import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 12px;
    flex-direction: column;

    span{
        font-size: 12px;
        color: #004D61;
        margin-bottom: 4px;
    }
`
export const ProgressBar = styled.div`
    height: 14px;
    border-radius: 3px;
    background-color: ${props => props.color ? props.color : '#004D61'};
    width: ${props => props.percentage ? props.percentage : 0}%;
    transition: 0.7s ease;
`