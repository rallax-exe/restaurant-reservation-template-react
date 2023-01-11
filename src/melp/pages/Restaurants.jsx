import { RestaurantList } from '../components/RestaurantList';


export const Restaurants = () => {

  

    return (
      <>
          <h2 className="banner-main-page">Wellcome to Melp</h2>
          
          <div className="banner container animated tada">
          <div className=" big-text animated tada">New Restaurants!</div>
            <div>Discover now</div>
            
          </div>
          
            
            <div className="container mb-3">
              <span className="span-location">It looks like you're in Mexico City</span>
                <hr />
              <h3 className="h3-main-page">Available Now</h3>
                
              <RestaurantList state='Oaxaca' />


              <h3 className="h3-main-page">Recommended</h3>
                
                <RestaurantList state='Guerrero' />

            </div>

            
          
      </>
    )
  }
  