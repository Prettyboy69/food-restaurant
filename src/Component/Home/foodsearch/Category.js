import React from 'react'
import './foodsearch.css';
import Image1 from '../../../images/pizza.jpg';
import Image2 from "../../../images/burger.jpg";
import Image3 from "../../../images/momo.jpg";
const Category = () => {
  return (
    <section className="categories">
        <div className="container">
            <h2 className="text-center">Explore Foods</h2>

            <a href="category-foods.html">
            <div className="box-3 float-container">
                <img src={Image1} alt="Pizza" className="img-responsive img-curve" />

                <h3 className="float-text text-white">Pizza</h3>
            </div>
            </a>

            <a href="#">
            <div className="box-3 float-container">
                <img src={Image2} alt="Burger" className="img-responsive img-curve" />

                <h3 className="float-text text-white">Burger</h3>
            </div>
            </a>

            <a href="#">
            <div className="box-3 float-container">
                <img src={Image3} alt="Momo" className="img-responsive img-curve" />

                <h3 className="float-text text-white">Momo</h3>
            </div>
            </a>

            <div className="clearfix"></div>
        </div>
    </section>
  )
}

export default Category