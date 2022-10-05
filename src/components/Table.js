import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContex';

function Table() {
  const { data, filterInput, selectedFilter } = useContext(PlanetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((planeta) => (
            planeta.name.toLowerCase().includes(filterInput.toLowerCase())
          ))
            .filter((linha) => {
              const bools = [];
              selectedFilter.forEach((filter) => {
                console.log(linha);
                console.log(filter.column);
                console.log(filter.value);
                if (filter.comparison === 'igual a') {
                  bools.push(Number(linha[filter.column]) === Number(filter.value));
                }
                if (filter.comparison === 'menor que') {
                  bools.push(Number(linha[filter.column]) < Number(filter.value));
                }
                if (filter.comparison === 'maior que') {
                  bools.push(Number(linha[filter.column]) > Number(filter.value));
                }
                console.log(bools);
              });
              return bools.every((el) => el);
            })
            .map((el, index) => (
              <tr key={ index }>
                <td>{el.name}</td>
                <td>{el.rotation_period}</td>
                <td>{el.orbital_period}</td>
                <td>{el.diameter}</td>
                <td>{el.climate}</td>
                <td>{el.gravity}</td>
                <td>{el.terrain}</td>
                <td>{el.surface_water}</td>
                <td>{el.population}</td>
                <td>{el.films}</td>
                <td>{el.creted}</td>
                <td>{el.edited}</td>
                <td>{el.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
