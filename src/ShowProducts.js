import React, { useState } from 'react';

const products = [
    { nameProduct: 'dress', category: 'girl', price: 40 },
    { nameProduct: 'short', category: 'women', price: 15 },
    { nameProduct: 'skirt', category: 'girl', price: 55 },
    { nameProduct: 'shoes', category: 'shoes', price: 60 },
    { nameProduct: 'boots', category: 'shoes', price: 80 },
    { nameProduct: 'pant', category: 'boy', price: 25 },
    { nameProduct: 'pant', category: 'boy', price: 40 },
    { nameProduct: 'socks', category: 'boy', price: 10 },
    { nameProduct: 'dress', category: 'girl', price: 40 },
    { nameProduct: 'dress', category: 'girl', price: 40 },
    { nameProduct: 'dress', category: 'girl', price: 25 },
    { nameProduct: 'dress', category: 'girl', price: 20 },
    { nameProduct: 'dress', category: 'women', price: 40 },

];


function ShowProducts(props) {
    const HideExpensiveItems = () => {
        setProductsCategory(products.filter(product => product.category === props.category && product.price < 30));
        setCount(productsCategory.length);
    }
    const [productsCategory, setProductsCategory] = useState(products.filter(product => product.category === props.category));
    const [count, setCount] = useState(productsCategory.length);

    return (
        <div>
            <h2>{props.category}</h2>
            <ul>
                {productsCategory.map(product =>
                    <li>name:{product.nameProduct}, category:{product.category} price:{product.price}</li>
                )}
            </ul>
            {count > 5 ? <h3>too much product</h3> : ''}
            <button data-testid="HideExpensiveItems" onClick={HideExpensiveItems}>Hide expensive items more then 30 </button>
        </div>
    );
};

export default ShowProducts;