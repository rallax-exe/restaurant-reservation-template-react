import { Link } from 'react-router-dom';


export const RestaurantCardSearch = ({
    name,
    rating,
    contact,
    address,
    id,
}) => {

    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const restaurantImageUrl = `/src/melp/img/restaurant-${random(1, 5)}.jpg`;

    return (
       

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={restaurantImageUrl} className="img-card-search card-img-top" alt={ name } />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item  bg-light">State: { address.state }</li>
                        <li className="list-group-item  bg-light">City: { address.city }</li>
                        <li className="list-group-item  bg-light">
                            <Link 
                                to={`/restaurant/${ id }`}
                                className="btn btn-outline-primary"
                            >
                                        More
                            </Link>
                        </li>
                    </ul>
                </div>
                
                </div>
            </div>
        </div>

      

        
    )
}
