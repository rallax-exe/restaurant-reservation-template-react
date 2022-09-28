import { restaurantes } from '../data/restaurantes';


export const getRestaurantesByState = ( state ) => {

    return restaurantes.filter(  restaurant => restaurant.address.state === state );
        

}