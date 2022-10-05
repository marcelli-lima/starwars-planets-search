import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContex';

function Filters() {
  const { filterInput, setFilterInput } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterInput }
      onChange={ (({ target }) => setFilterInput(target.value)) }
      placeholder="procure planeta"
    />
  );
}

export default Filters;
