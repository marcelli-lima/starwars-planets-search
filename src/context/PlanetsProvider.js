import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContex';

function PlanetsProvider({ children }) {
  const api = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  const [selected, setSelected] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [selectedFilter, setSelectedFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(api);
      const dataPlanets = await result.json();
      console.log(dataPlanets);
      setData(dataPlanets.results);
    };

    fetchData();
  }, []);

  const contextValue = {
    data,
    setData,
    setFilterInput,
    filterInput,
    selected,
    setSelected,
    selectedFilter,
    setSelectedFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
