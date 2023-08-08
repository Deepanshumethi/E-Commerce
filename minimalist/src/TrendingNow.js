import React from 'react'
import products from './ProductsList';
import TrendingSmallCard from './TrendingSmallCard';

function TrendingNow() {
    const trending =products.filter(function(item)
    {
        return(item.trending);
    })
    
  return (
    <>
        <div className='container-fluid'>
            <div className='row trending_textAndbutton'>
                <span className='col-2  trending_text'>Trending Now</span>
                <span className='col-2 left_right_btn'>
                <button className='swiper-button-prev'><i className="fa-solid fa-arrow-left"></i>  </button>
                    <button id='scroll_right' className='swiper-button-next' ><i className="fa-solid fa-arrow-right"></i>  </button>
                </span>
            </div>

            <div className='trending_cards'>
                {
                    trending.map((trending_products)=>(
                        <div className='trending_card_single'>
                        <TrendingSmallCard image={trending_products.image} name={trending_products.product} price={trending_products.price} />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default TrendingNow