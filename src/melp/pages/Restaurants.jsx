import { RestaurantList } from '../components/RestaurantList';


export const Restaurants = () => {

  

    return (
      <>
          <h2 className="banner-main-page">Discover restaurants</h2>
          
        
          
            
            <div className="container">
              <span>It looks like you're in Mexico City. Not correct? </span>
                <hr />
              <h3 className="h3-main-page">Available Now</h3>
                
              <RestaurantList state='Oaxaca' />


              <h3 className="h3-main-page">Recomendados</h3>
                
                <RestaurantList state='Guerrero' />

            </div>

            
          
      </>
    )
  }
  