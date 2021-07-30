import React from 'react'
import { Indicator, Wrapper } from './Checkbox.styles'

function Checkbox({title, value, onClick}){
    
    return <Wrapper>
        <Indicator value={value} onClick={onClick}/>
        {title}
    </Wrapper>
}

export default Checkbox