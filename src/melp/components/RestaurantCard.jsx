import { Link } from 'react-router-dom';




export const RestaurantCard = ({ 
    name, 
    rating,
    contact,
    address,
    id,
 }) => {

    
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const restaurantImageUrl = `/assets/images/restaurant-${ random(1,5)}.jpg`;

  return (
    <div className="col">
        <div className="card">

            <div className="row no-gutters">
                
                <div className="col-4">
                    <img src={restaurantImageUrl} className="card-img" alt={ name } />
                </div>

                <div className="col-8">
                    <div className="card-body">

                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ address.state }</p>
                        <p className="card-text">
                            <small className="text-muted">{ address.city }</small>
                        </p>
                        
                        <Link to={`/restaurant/${ id }`}>
                            More
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
