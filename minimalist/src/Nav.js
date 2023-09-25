import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  function handleClickCategories(event) {
    
    navigate('/categories');
  }
  function handleClickHome(event){
    navigate('/');
  }
  function handleClickProduct(event){
    navigate('/productpage');
  }
  return (
    <>
      <div className='container-fluid mainNav'>
          <span className='logo' onClick={handleClickHome}>Logo</span>

          <ul className='pages'>
            <li className='page categorie-Page' onClick={handleClickCategories}>Categories</li>
            <li className='page product-page' onClick={handleClickProduct}>Product Page</li>
            <li className='page'><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
      </div>
      <Link to="/Categories"/>
      <Link to="/home"/>
      <Link to="/productpage"/>
    </>
  )
}
export default Nav;