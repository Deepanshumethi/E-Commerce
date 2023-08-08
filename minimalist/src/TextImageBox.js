import React from 'react'

function TextImageBox(props) {

  return (
   <>
    <div className='container-fluid TextImageBox'>
        <div className='row banner'>
        {
            ((props.flip) ? <><div className='col-lg-6 col-md-6 col-sm-12 box-image'>
             <img src={props.image}></img>
         </div><div className='col-lg-6 col-md-6 col-sm-12 text-box'>
         
         <span>
           <h1>{props.heading}</h1>
           <p>{props.text}</p>
           <span type='button' className='banner_shopNowBtn'>SHOP NOW</span>
         </span>
         </div> </> :<><div className='col-lg-6 col-md-6 col-sm-12 text-box'>
         
         <span>
           <h1>{props.heading}</h1>
           <p>{props.text}</p>
           <span type='button' className='banner_shopNowBtn'>SHOP NOW</span>
         </span>
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12 box-image'>
             <img src={props.image}></img>
         </div></> )
          }
          
        </div>
    </div>
   </>
  )
}

export default TextImageBox