import { useLocation, useNavigate } from 'react-router-dom';
import { RestaurantCardSearch } from '../components';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getRestaurantesByState } from '../helpers';


export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse( location.search );

  const restaurant = getRestaurantesByState(q);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
      event.preventDefault();
      if( searchText.trim().length <= 1) return;
      //navigate(`?q=${searchText.toLowerCase().trim()}`);
      navigate(`?q=${searchText}`);
  }

  return (
    <>
    <h2 className="banner-page">Search</h2>
    <div className="container search">
        <h3 className="h3-search">Discover a new restaurant</h3>
        <hr />

    <div className="row row-search">
        <div className="col-12 mt-4">
          <span>Search a restaurant by state</span>
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Type a state"
              className="form-control form-search mt-3"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>

        </div>

        <div className="col-12 mt-5">
            <span>Results</span>
            <hr />
            {
              ( q === '')
              ? <div className="alert alert-primary">Search a restaurant</div>
              : ( restaurant.length === 0 ) && <div className="alert alert-danger">No restaurant with <b>{ q }</b></div>
            }
          
            {
              restaurant.map( restaurant => (
                <RestaurantCardSearch key={ restaurant.id }{...restaurant} />
              ) )
            }

        </div>
     </div>
    </div>
    </>
  )
}
