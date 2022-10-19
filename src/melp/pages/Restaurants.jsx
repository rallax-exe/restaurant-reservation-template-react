import { RestaurantList } from '../components/RestaurantList';


export const Restaurants = () => {

  

    return (
      <>
          <h1 className="h1-main-page">Discover restaurants</h1>
          
        
          <div className="container">
            <span>It looks like you're in Mexico City. Not correct? </span>
            <hr />
            <RestaurantList state='Oaxaca' />
          </div>
      </>
    )
  }
  