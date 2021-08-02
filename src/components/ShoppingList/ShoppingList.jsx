import React from 'react'
import { Title, Wrapper, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox/Checkbox'

function ShoppingList({title, products, onToggle}){    

    return <Wrapper>
        <Title>{title}</Title> 
        <Array>
            { products.map(product => <Checkbox
                value={product.checked}
                title={product.name}
                onClick={() => onToggle(product.id)}
            />) }
        </Array>      
    </Wrapper>
}

export default ShoppingList