import React, { useState } from 'react'
import products from '../ProductsList'
import ProductCard from '../ProductCard'
import Nav from '../Nav'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Categories() {
    let categorie = products.map((categorie) => (
        (categorie.categorie)
    ))
    let uniqueCategorie = Array.from(new Set(categorie))
    //    console.log(uniqueCategorie)
    let [mainCategorie, setCategorie] = useState("All");
    // let filteredCategorie;
    console.log(mainCategorie)
    const
        filteredCategorie = products.filter(function (product) {
            return (product.categorie == mainCategorie)
        })
        const navigate = useNavigate();

        function handleClick(event) {
      
          navigate('/home');
        }

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className='categoriesLogo'>
                    <span className='homeLogo' onClick={handleClick}><i className="fa-solid fa-angle-left"></i>Home</span>
                </div>
            </div>

            <div className='container-fluid categorieNameBtnLis '>
                <div className='Maincategorie'>{mainCategorie}</div>
                <div className='listOfCategorie'>
                    <button onClick={() => setCategorie("All")}> All</button>
                    {
                        uniqueCategorie.map((categorie) => (
                            <button onClick={() => setCategorie(categorie)}>{categorie}</button>
                        ))
                    }
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row filteredProducts'>
                    {
                        (mainCategorie == "All" ? products.map((Products) => (
                            <div className='col-lg-3 col-md-4 col-sm-6 product'>
                                <ProductCard image={Products.image} name={Products.product} price={Products.price} />
                            </div>)) : filteredCategorie.map((Products) => (
                                <div className='col-lg-3 col-md-4 col-sm-6 product'>
                                    <ProductCard image={Products.image} name={Products.product} price={Products.price} />
                                </div>
                            )))
                    }
                </div>


            </div>
            <Link to="/Categories">Categories</Link>



        </>
    )
}

export default Categories