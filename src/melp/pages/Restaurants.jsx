import { Link, useNavigate } from 'react-router-dom';
import { RestaurantList } from '../components/RestaurantList';


export const Restaurants = () => {

  const navigate = useNavigate();

  const onChange = () => {

    navigate( '/search' );

  }

  return (
    <>
      <h2 className="banner-main-page">Wellcome to Melp</h2>

      <div className="banner container animated tada">
        <div className=" big-text animated tada">New Restaurants!</div>
        <div>Discover now</div>

      </div>


      <div className="container mb-3">
        <span className="span-location">It looks like you're in Mexico City</span>
        <hr />
        <h3 className="h3-main-page banner-available-now">Available Now</h3>

        <RestaurantList state='Oaxaca' />


        <h3 className="h3-main-page banner-recommend">Recommended</h3>

        <RestaurantList state='Veracruz' />

        <h3 className="h3-main-page banner-recommend">Trending</h3>

        <RestaurantList state='Chiapas' />

        <h3 className="h3-main-page banner-recommend">Explore</h3>

        <div className="explore-state">
          <ul>
            <li><Link className="explore-list">Puebla</Link></li>
            <li><Link className="explore-list">Guerreo</Link></li>
            <li><Link className="explore-list">Chiapas</Link></li>
          </ul>
          <ul>
            <li><Link className="explore-list">Guanajuato</Link></li>
            <li><Link className="explore-list">Tabasco</Link></li>
            <li><Link className="explore-list">Sinaloa</Link></li>
          </ul>
          <ul>
            <li><Link className="explore-list">Campeche</Link></li>
            <li><Link className="explore-list">Durango</Link></li>
            <li><Link className="explore-list">Quintana Roo</Link></li>
          </ul>
        </div>

      </div>

      <div className="banner-bottom container animated tada">
        <div className=" big-text animated tada">Enjoy the best flavor</div>       
        <button className="btn btn-primary" onClick={ onChange }>Search a restaurant</button>

      </div>

    </>
  )
}
