import { Link } from 'react-router-dom';


export const RestaurantCard = ({ name, rating, contact, address, id, }) => {


    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const restaurantImageUrl = `/assets/images/restaurant-${random(1, 5)}.jpg`;

    return (
        <>

            <div className="col">
                <div className="card  text-dark bg-light  h-100">

                    <Link to={`/restaurant/${id}`}>
                        <img src={restaurantImageUrl} className="img-card-list card-img-top" alt={name} />
                    </Link>

                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>

                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item  bg-light">{address.state}</li>
                        <li className="list-group-item  bg-light">{address.city}</li>
                    </ul>

                    <div className="card-footer text-center">

                        <button
                            className="btn btn-outline-primary"
                        >
                            <Link to={`/restaurant/${id}`} style={{ textDecoration: 'none' }}>
                                More
                            </Link>
                        </button>

                    </div>

                </div>

            </div>


        </>
    )
}
