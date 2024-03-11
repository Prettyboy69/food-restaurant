import React from 'react'
import './foodmenu.css';
import Image1 from "../../../images/menu-pizza.jpg";
import Image2 from "../../../images/menu-burger.jpg";
import Image3 from "../../../images/menu-burger.jpg";
import Image4 from "../../../images/menu-pizza.jpg";
import Image5 from "../../../images/menu-pizza.jpg";


const FoodMenu = () => {
  return (
    
     <section className="food-menu">
        <div className="container">
            <h2 className="text-center">Food Menu</h2>

            <div className="food-menu-box">
                <div className="food-menu-img">
                    <img src={Image1} alt="Chicke Hawain Pizza" className="img-responsive img-curve"/>
                </div>

                <div className="food-menu-desc">
                    <h4>Food Title</h4>
                    <p className="food-price">$2.3</p>
                    <p className="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="order.html" className="btn btn-primary">Order Now</a>
                </div>
            </div>

            <div className="food-menu-box">
                <div className="food-menu-img">
                    <img src={Image2} alt="Chicke Hawain Pizza" className="img-responsive img-curve"/>
                </div>

                <div className="food-menu-desc">
                    <h4>Smoky Burger</h4>
                    <p className="food-price">$2.3</p>
                    <p className="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="#" className="btn btn-primary">Order Now</a>
                </div>
            </div>

            <div className="food-menu-box">
                <div className="food-menu-img">
                    <img src={Image3} alt="Chicke Hawain Burger" className="img-responsive img-curve" />
                </div>

                <div className="food-menu-desc">
                    <h4>Nice Burger</h4>
                    <p className="food-price">$2.3</p>
                    <p className="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="#" className="btn btn-primary">Order Now</a>
                </div>
            </div>

            <div className="food-menu-box">
                <div className="food-menu-img">
                    <img src={Image4} alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
                </div>

                <div className="food-menu-desc">
                    <h4>Food Title</h4>
                    <p className="food-price">$2.3</p>
                    <p className="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="#" className="btn btn-primary">Order Now</a>
                </div>
            </div>

            <div className="food-menu-box">
                <div className="food-menu-img">
                    <img src={Image5} alt="Chicke Hawain Pizza" className="img-responsive img-curve"/>
                </div>

                <div className="food-menu-desc">
                    <h4>Food Title</h4>
                    <p className="food-price">$2.3</p>
                    <p className="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="#" className="btn btn-primary">Order Now</a>
                </div>
            </div>

            <div className="food-menu-box">
                <div class="food-menu-img">
                    <img src={Image4} alt="Chicke Hawain Momo" class="img-responsive img-curve"/>
                </div>

                <div class="food-menu-desc">
                    <h4>Chicken Steam Momo</h4>
                    <p class="food-price">$2.3</p>
                    <p class="food-detail">
                        Made with Italian Sauce, Chicken, and organice vegetables.
                    </p>
                    <br/>

                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>


            <div class="clearfix"></div>

            

        </div>

        <p class="text-center">
            <a href="#">See All Foods</a>
        </p>
    </section>
  )
}

export default FoodMenu