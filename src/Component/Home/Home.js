import React from 'react'
import Images from '../../images/logo.png';
import './Home.css'
import FoodSearch from './foodsearch/FoodSearch';
import Category from './foodsearch/Category';
import FoodMenu from './foodmenu/FoodMenu';
import Social from './social/Social';

const Home = () => {
  return (
    //  <!-- Navbar Section Starts Here -->
    <div>
      <section className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#" title="Logo">
              <img
                src={Images}
                alt="Restaurant Logo"
                className="img-responsive"
              />
            </a>
          </div>

          <div className="menu text-right">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li>
                <a href="foods.html">Foods</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </section>

      <FoodSearch />
      <Category />
      <FoodMenu/>
      <Social/>
    </div>
  );
}

export default Home