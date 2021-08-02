import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import LineChart from '../../shared/LineChart/LineChart'
import { Wrapper, Card } from './App.styles'
import ShoppingList from '../ShoppingList/ShoppingList'
import productsMock from '../../mocks/productsList.json'

function App(){   
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [productsSelected, setProductsSelected] = useState([])
    useEffect(() => {
        const newProductsSelected = products.filter(product => product.checked)
        setProductsSelected(newProductsSelected) }, [products])

    const [saudavel, setSaldavel] = useState(10)
    const [naoTaSsaudavel, setNaoTaoSaldavel] = useState(5)
    const [limpeza, setLimpeza] = useState(30)
    const [outros, setOutros] = useState(45)
    useEffect( () => {setTimeout(() => {setSaldavel(60); setNaoTaoSaldavel(48); setLimpeza(85); setOutros(80)}, 3000)},[])


    //funcao responsavel por alterar status do checkbox
    function handleToggle(id){
        const newProducts = products.map( product => 
            product.id == id ? {...product, checked: !product.checked} : product
        )

        setProducts(newProducts)
    }

    return <Wrapper>           
        <Card>
            <AppHeader />
            <AppContainer
                colLeft={<ShoppingList title={'Produtos Disponíveis'} products={products} onToggle={handleToggle}/>}

                colMiddle={<ShoppingList title={'Seu Carrinho'} products={productsSelected} onToggle={handleToggle}/>}

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