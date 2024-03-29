import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { RestaurantList } from '../components/';
import { RestaurantMap } from '../components/';
import { getRestaurantById } from '../helpers';


export const Restaurant = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = getRestaurantById( id );
  const restaurantImageUrl = `/img/restaurants/restaurant-${ random(1,5)}.jpg`;

  const onNavigateBack = () =>{
    navigate(-1);
  }

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  
  if (!restaurant){
    return <Navigate to="/restaurants" />
  }

  return (
    
    <>
    <h2 className="banner-page">{ restaurant.name }</h2>
    <div className="container">
      
    <div className="row row-list-mobile ">
        <div className="col-3 ">
          <img
            src={restaurantImageUrl} 
            alt="Img" 
            className="img-thumbnail animate__animated animate__bounce"
          />
        </div>

        
          <div className="col-8">
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>State: </b>{ restaurant.address.state }</li>
                <li className="list-group-item"> <b>City: </b>{ restaurant.address.city }</li>
                <li className="list-group-item"> <b>Street: </b>{ restaurant.address.street }</li>
                <li className="list-group-item"> <b>Rating: </b> ★★★★★ </li>
                <li className="list-group-item"> <b>Phone: </b>{ restaurant.contact.phone }</li>
              </ul>

            <button
                className="btn btn-outline-primary mt-5"
                onClick={ onNavigateBack }
            >
                Go back
            </button>

          </div>

          <RestaurantMap />

          </div>
    </div>
    </>
  )
}
