
function SearchAndFilter(props) {
  const handleSearchWine = (event) => {
    props.setSearchWine(event.target.value);
  };
  return (
    <div className="search-and-filter">
      <input
        className="search-bar-wines"
        type="text"
        placeholder="Search by name"
        onChange={handleSearchWine}
        value={props.searchWine}
      />
      <div className="checkbox">
          <p id="location">Location</p>
        <div className="countries">
        <div>
        <input
          name="spain"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.spain}
          type="checkbox"
        />
        <label htmlFor="Spain">Spain </label>
        </div>
        <div>
        <input
          name="france"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.france}
          type="checkbox"
        />
        <label htmlFor="France">France </label>
        </div>
        <div>
        <input
          name="portugal"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.portugal}
          type="checkbox"
        />
        <label htmlFor="Portugal">Portugal </label>
        </div>
        <div>
        <input
          name="italy"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.italy}
          type="checkbox"
        />
        <label htmlFor="Italy">Italy </label>
        </div>
        <div>
        <input
          name="argentina"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.argentina}
          type="checkbox"
        />
        <label htmlFor="Argentina">Argentina </label>
        </div>
        <div>
        <input
          name="chile"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.chile}
          type="checkbox"
        />
        <label htmlFor="Chile">Chile </label>
        </div>
        <div>
        <input
          name="unitedStates"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.unitedStates}
          type="checkbox"
        />
        <label htmlFor="UnitedStates">United States </label>
        </div>
        <div>
        <input
          name="canada"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.canada}
          type="checkbox"
        />
        <label htmlFor="Canada">Canada </label>
        </div>
        <div>
        <input
          name="australia"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.australia}
          type="checkbox"
        />
        <label htmlFor="Australia">Australia </label>
        </div>
        <div>
        <input
          name="southAfrica"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.southAfrica}
          type="checkbox"
        />
        <label htmlFor="SouthAfrica">South Africa </label>
        </div>
        <div>
        <input
          name="macedonia"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.macedonia}
          type="checkbox"
        />
        <label htmlFor="Macedonia">Macedonia </label>
        </div>
        <div>
        <input
          name="switzerland"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.switzerland}
          type="checkbox"
        />
        <label htmlFor="Switzerland">Switzerland </label>
        </div>
        <div>
        <input
          name="germany"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.germany}
          type="checkbox"
        />
        <label htmlFor="Germany">Germany </label>
        </div>
        <div>
        <input
          name="austria"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.austria}
          type="checkbox"
        />
        <label htmlFor="Austria">Austria </label>
        </div>
        <div>
        <input
          name="hungary"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.hungary}
          type="checkbox"
        />
        <label htmlFor="Hungary">Hungary </label>
        </div>
        <div>
        <input
          name="newZealand"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.newZealand}
          type="checkbox"
        />
        <label htmlFor="NewZealand">New Zealand </label>
        </div>
        </div>
      </div>
    </div>
  );
}
export default SearchAndFilter;
