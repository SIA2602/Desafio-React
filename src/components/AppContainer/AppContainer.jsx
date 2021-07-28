import React from 'react'
import { Wrapper } from './AppContainer.style'

function AppContainer({colLeft, colMiddle, colRight}){
    return <Wrapper>
        <div>{colLeft}</div>
        <div>{colMiddle}</div>
        <div>{colRight}</div>
    </Wrapper>
}

export default AppContainer