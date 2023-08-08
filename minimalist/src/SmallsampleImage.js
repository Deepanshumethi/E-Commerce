import React from 'react'

function SmallsampleImage(props) {
    if((props.second)===1){
        // document.getElementsByClassName("img")[0].style.paddingTop="100px";
        // document.querySelectorAll(".img").style.visiblity="hidden"
    }
    return (
        <>
            <div className='smallimage'>
                <img className='img' src={props.image}/>
                <div className='text small-text'>
           <h1>{props.name}</h1>
           </div>
            </div>
        </>
      )
}

export default SmallsampleImage