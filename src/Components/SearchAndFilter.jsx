
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
        <input
          name="spain"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.spain}
          type="checkbox"
        />
        <label htmlFor="Spain">Spain </label>
        <input
          name="france"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.france}
          type="checkbox"
        />
        <label htmlFor="France">France </label>
        <input
          name="portugal"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.portugal}
          type="checkbox"
        />
        <label htmlFor="Portugal">Portugal </label>
        <input
          name="italy"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.italy}
          type="checkbox"
        />
        <label htmlFor="Italy">Italy </label>
        <input
          name="argentina"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.argentina}
          type="checkbox"
        />
        <label htmlFor="Argentina">Argentina </label>
        <input
          name="chile"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.chile}
          type="checkbox"
        />
        <label htmlFor="chile">Chile </label>
        <input
          name="unitedStates"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.unitedStates}
          type="checkbox"
        />
        <label htmlFor="UnitedStates">United States </label>
        <input
          name="Canada"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.Canada}
          type="checkbox"
        />
        <label htmlFor="Canada">Canada </label>
        <input
          name="australia"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.australia}
          type="checkbox"
        />
        <label htmlFor="Australia">Australia </label>
        <input
          name="southAfrica"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.southAfrica}
          type="checkbox"
        />
        <label htmlFor="SouthAfrica">South Africa </label>
        <input
          name="macedonia"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.macedonia}
          type="checkbox"
        />
        <label htmlFor="Macedonia">Macedonia </label>
        <input
          name="switzerland"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.switzerland}
          type="checkbox"
        />
        <label htmlFor="Switzerland">Switzerland </label>
        <input
          name="germany"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.germany}
          type="checkbox"
        />
        <label htmlFor="Germany">Germany </label>
        <input
          name="austria"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.austria}
          type="checkbox"
        />
        <label htmlFor="Austria">Austria </label>
        <input
          name="hungary"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.hungary}
          type="checkbox"
        />
        <label htmlFor="Hungary">Hungary </label>
        <input
          name="newZealand"
          onChange={props.handleCheckBox}
          checked={props.searchLocation.newZealand}
          type="checkbox"
        />
        <label htmlFor="NewZealand">New Zealand </label>
      </div>
    </div>
  );
}

export default SearchAndFilter;
