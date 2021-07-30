import React, { useState } from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Card } from './App.styles'

function App(){
    const [batata, setBatata] = useState()
    const [arroz, setArroz] = useState()

    return <Wrapper>           
        <Card>
            <AppHeader />
            <AppContainer
                colLeft={<div>Produtos Disponíveis
                    <Checkbox title='Batata' value={batata} onClick={() => setBatata(!batata)}/>   
                    <Checkbox title='Arroz' value={arroz} onClick={() => setArroz(!arroz)}/>                  
                </div>}

                colMiddle={<div>Seu Carrinho</div>}
                colRight={<div>Estatisticas</div>}                
            />           
        </Card>        
    </Wrapper>
}

export default App