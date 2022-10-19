import { getRestaurantesByState } from '../helpers';
import { RestaurantCard } from './';


export const RestaurantList = ({ state }) => {
  
    const restaurants = getRestaurantesByState( state );

    console.log({restaurants})

    return (
    
           
    <div className="row rows-cols-1 row-cols-md-4  ">
    
        
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
