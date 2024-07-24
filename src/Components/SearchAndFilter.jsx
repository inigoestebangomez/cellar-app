import { useState } from "react"


function SearchAndFilter(props) {

  const handleSearchWine = (event) => {
    props.setSearchWine(event.target.value)
  }

  return (
    <div>
      <input className="search-bar-wines" type="text" onChange={handleSearchWine} value={props.searchWine}/>
    <div className="checkbox">
      <input name="spain" onChange={props.handleCheckBox} checked={props.searchLocation.spain} type="checkbox" />
      <label htmlFor="Spain">Spain </label>
      <input name="france" onChange={props.handleCheckBox} checked={props.searchLocation.france} type="checkbox" />
      <label htmlFor="France">France </label>
      <input name="portugal" onChange={props.handleCheckBox} checked={props.searchLocation.portugal} type="checkbox" />
      <label htmlFor="Portugal">Portugal </label>
      <input name="unitedStates" onChange={props.handleCheckBox} checked={props.searchLocation.unitedStates} type="checkbox" />
      <label htmlFor="UnitedStates">United States </label>
      <input name="italy" onChange={props.handleCheckBox} checked={props.searchLocation.italy} type="checkbox" />
      <label htmlFor="Italy">Italy </label>
    </div>
    </div>
  )
}

export default SearchAndFilter