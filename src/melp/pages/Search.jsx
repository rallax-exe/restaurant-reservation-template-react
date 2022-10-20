import { useLocation, useNavigate } from 'react-router-dom';
import { RestaurantCard } from '../components';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getRestaurantByName } from '../helpers';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse( location.search );

  const restaurant = getRestaurantByName(q);

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
    <div className="container">
        <h1>Search</h1>
        <hr />

    <div className="row">
        <div className="col-5">
          <h4>Search a Restaurant</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search by state"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </form>

          <button className="btn btn-outline-primary mt-1">
            Search
          </button>


        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />
            {
              ( q === '')
              ? <div className="alert alert-primary">Search a restaurant</div>
              : ( restaurant.length === 0 ) && <div className="alert alert-danger">No restaurant with <b>{ q }</b></div>
            }
          
            {
              restaurant.map( restaurant => (
                <RestaurantCard key={ restaurant.id }{...restaurant} />
              ) )
            }

        </div>
     </div>
    </div>
  )
}
