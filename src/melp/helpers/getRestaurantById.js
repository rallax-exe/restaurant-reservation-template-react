import { restaurantes } from "../data/restaurantes"

export const getRestaurantById = ( id ) => {

    return restaurantes.find( restaurant => restaurant.id === id );

}