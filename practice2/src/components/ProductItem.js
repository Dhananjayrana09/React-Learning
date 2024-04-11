import React, {useState} from 'react';


import ProductDate from './ProductDate';
import Card from './Card'
import './ProductItem.css'

const ProductItem = (props) => {

    
    const [title, settitle] = useState(props.title)

    function clickHandaler() {
        settitle("Porpcorn")
    }


    return (
        <Card className='product-item'>
            <ProductDate date = {props.date} />
            <div className='product-item-description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandaler}>Add To Cart</button>
        </Card>
    );
}
export default ProductItem;