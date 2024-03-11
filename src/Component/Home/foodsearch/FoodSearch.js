import React from 'react'
import './foodsearch.css'
const FoodSearch = () => {
  return (
    
    <section class="food-search text-center">
        <div class="container">
            
            <form action="food-search.html" method="POST">
                <input type="search" name="search" placeholder="Search for Food.." required />
                <input type="submit" name="submit" value="Search" class="btn btn-primary"/>
            </form>

        </div>
    </section>
    

  
    
  )
}

export default FoodSearch