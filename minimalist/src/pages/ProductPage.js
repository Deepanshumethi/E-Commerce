import React from 'react'
import Nav from '../Nav'
function ProductPage() {
  return (
    <>
        <Nav/>

        <div className='container-fluid'>
            <div className='row product-box'>
                <div className='col-12 prod-name'>
                    Product-name
                </div>
                <div className='col-lg-6'>
                    <div className='product-main-image'>
                        <img src='https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg'/>
                    </div>
                    <div className='row another-images'>
                        <div className='col-4 another-img'>
                            <img src='https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg'/>
                        </div>
                        <div className='col-4 another-img'>
                            <img src='https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg'/>
                        </div>
                        <div className='col-4 another-img'>
                            <img src='https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg'/>
                        </div>
                    </div>
                </div>
                <div className='col-6 product-detail-box'>
                    <span className='product-description'>Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.</span>

                    <div className='row QuantityAndPrice' >
                        <div className='col-4'>
                            <h1>Quantity</h1>
                        </div>
                        <div className='col-4 adjust-quantity'>
                            <button className='minus'>-</button>
                            <input className='input-quantity' type='number'></input>
                            <button className='plus'>+</button>
                        </div>
                        <div className='col-4 product-price'>
                            price
                        </div>
                    </div>
                    <div className='row addAndBuy-btn'>
                        <div className='col-6'>
                            <button className='Addto'>Add To Cart</button>
                        </div>
                        <div className='col-6'>
                            <button className='Buy'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage