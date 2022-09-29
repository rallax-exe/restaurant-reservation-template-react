import { RestaurantCard } from '../components';
import { useForm } from '../hooks/useForm';

export const Search = () => {

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
      event.preventDefault();
      if( searchText.trim().length <= 1) return;
      console.log({searchText});
  }

  return (
    <>
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
            <div className="alert alert-primary">
                Search a restaurant
            </div>

            <div className="alert alert-danger">
                No restaurant with <b>ABC</b>
            </div>

            

        </div>
     </div>
    </>
  )
}
