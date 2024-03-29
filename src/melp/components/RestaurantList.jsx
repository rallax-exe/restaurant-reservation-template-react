import { getRestaurantesByState } from '../helpers';
import { RestaurantCard } from './';


export const RestaurantList = ({ state }) => {
  
    const restaurants = getRestaurantesByState( state );

    

    return (
    
           
    <div className="row-cards row rows-cols-1 row-cols-md-4">
    
        
        {          
            restaurants.map( restaurant => (
                <RestaurantCard key={ restaurant.id }
                                {...restaurant}
                />
            ))
        }
    </div>
  )
}
