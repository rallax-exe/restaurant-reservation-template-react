import { restaurantes } from "../data/restaurantes";




export const getRestaurantByName = ( name = '') =>{

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];
   
    
    return restaurantes.filter(
        restaurant => restaurant.name.toLocaleLowerCase().includes(name)
    );

}