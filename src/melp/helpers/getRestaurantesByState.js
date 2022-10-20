import { restaurantes } from '../data/restaurantes';


export const getRestaurantesByState = ( state = '' ) => {
    
    state = state.toLocaleLowerCase().trim();
    if (state.length === 0) return [];
    

    return restaurantes.filter(
        restaurant => restaurant.address.state.toLocaleLowerCase().includes(state)
    );
        

}


