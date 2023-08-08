import React from 'react'

function ProductCard(props) {
  return (
    <>
        <div className='productCard'>
            <div className='productHeader'>
            <img className='productCardImage' src={props.image}/>
            </div>
            <div className='productDetails'>
            <span className='product-name'>{props.name}</span>
            <span className='product-price'>{props.price}</span>
            </div>
        </div>
    </>
  )
}

export default ProductCard