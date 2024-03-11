import React from 'react'
import Image1  from '../../images/pizza.jpg';
import Image2  from '../../images/burger.jpg';
import Image3  from '../../images/momo.jpg';



const Category = () => {
  return (
  
       <section class="categories">
        <div class="container">
            <h2 class="text-center">Explore Foods</h2>

            <a href="category-foods.html">
            <div class="box-3 float-container">
                <img src={Image1} alt="Pizza" class="img-responsive img-curve"/>

                <h3 class="float-text text-white">Pizza</h3>
            </div>
            </a>

            <a href="#">
            <div class="box-3 float-container">
                <img src={Image2} alt="Burger" class="img-responsive img-curve"/>

                <h3 class="float-text text-white">Burger</h3>
            </div>
            </a>

            <a href="#">
            <div class="box-3 float-container">
                <img src={Image3} alt="Momo" class="img-responsive img-curve"/>

                <h3 class="float-text text-white">Momo</h3>
            </div>
            </a>

            <div class="clearfix"></div>
        </div>
    </section>
  )
}

export default Category