import React from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Card } from './App.styles'

function App(){
    return <Wrapper>        
        <Card>
            <AppHeader />
            <AppContainer
                colLeft={<div>Produtos Disponíveis</div>}
                colMiddle={<div>Seu Carrinho</div>}
                colRight={<div>Estatisticas</div>}                
            />           
        </Card>        
    </Wrapper>
}

export default App