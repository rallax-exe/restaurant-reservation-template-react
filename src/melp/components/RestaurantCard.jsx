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

    const restaurantImageUrl = `/assets/images/restaurant-${random(1, 5)}.jpg`;

    return (

        
        <div className="col">
        <div className="card  text-dark bg-light  h-100 ">
                <img src={restaurantImageUrl} className="card-img-top" alt={ name } />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    
                </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item  bg-light">{ address.state }</li>
                <li className="list-group-item  bg-light">{ address.city }</li>
            </ul>

            <div className="card-footer">
            <Link to={`/restaurant/${ id }`}>
                                More
                            </Link>

                
            </div>

        </div>
        
        </div>
    )
}
