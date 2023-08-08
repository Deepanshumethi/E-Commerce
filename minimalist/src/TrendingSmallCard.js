import React from 'react'

function TrendingSmallCard(props) {
  return (
   <>
        <div className='trendingCard'>
            <div className='trendingCardHeader'>
            <img className='trendingCardImage' src={props.image}/>
            </div>
            <div className='trendingCardDetails'>
            <span className='trendingCard-name'>{props.name}</span>
            <span className='trendingCard-price'>{props.price}</span>
            </div>
        </div>
   </>
  )
}

export default TrendingSmallCard