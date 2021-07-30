import React, { useEffect, useState } from 'react'
import Checkbox from '../../Checkbox/Checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import LineChart from '../LineChart/LineChart'
import { Wrapper, Card } from './App.styles'

function App(){
    const [batata, setBatata] = useState()
    const [arroz, setArroz] = useState()

    const [saudavel, setSaldavel] = useState(10)
    const [naoTaSsaudavel, setNaoTaoSaldavel] = useState(5)
    const [limpeza, setLimpeza] = useState(30)
    const [outros, setOutros] = useState(45)
    useEffect( () => {setTimeout(() => {setSaldavel(60); setNaoTaoSaldavel(48); setLimpeza(85); setOutros(80)}, 3000)},[])

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    return <Wrapper>           
        <Card>
            <AppHeader />
            <AppContainer
                colLeft={<div>Produtos Disponíveis
                    <Checkbox title='Batata' value={batata} onClick={() => setBatata(!batata)}/>   
                    <Checkbox title='Arroz' value={arroz} onClick={() => setArroz(!arroz)}/>                  
                </div>}

                colMiddle={<div>Seu Carrinho</div>}

                colRight={<div>Estatisticas
                    <LineChart title={'saudavel'} percentage={saudavel} color={colors[0]}/> 
                    <LineChart title={'nao tao saudavel'} percentage={naoTaSsaudavel} color={colors[1]}/> 
                    <LineChart title={'limpeza'} percentage={limpeza} color={colors[2]}/> 
                    <LineChart title={'outros'} percentage={outros} color={colors[3]}/>                 
                </div>}                
            />           
        </Card>        
    </Wrapper>
}

export default App