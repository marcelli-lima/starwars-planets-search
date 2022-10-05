import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContex';

const colun = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
function Filters() {
  const { filterInput, setFilterInput } = useContext(PlanetsContext);
  const { selected, setSelected } = useContext(PlanetsContext);
  const { setSelectedFilter } = useContext(PlanetsContext);
  const [columnOptions, setColumnOptions] = useState(colun);

  const handleClick = () => {
    setSelectedFilter((prevState) => ([
      ...prevState,
      selected,
    ]));
    const newArrayOptions = columnOptions.filter((option) => (
      option !== selected.column));
    setColumnOptions(newArrayOptions);
    setSelected({
      column: '',
      comparison: '',
      value: '',
    });
  };

  return (
    <>
      <h3>Filtrar</h3>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterInput }
        onChange={ (({ target }) => setFilterInput(target.value)) }
        placeholder="procure planeta"
      />
      <label htmlFor="column-filter">
        Selecione uma coluna
        <select
          data-testid="column-filter"
          value={ selected.column }
          onChange={ ({ target }) => {
            setSelected((prevState) => ({ ...prevState, column: target.value }));
          } }
        >
          {columnOptions.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>

      </label>
      <select
        id="select-comparison"
        data-testid="comparison-filter"
        name="comparison"
        value={ selected.comparison }
        onChange={ ({ target }) => {
          setSelected((prevState) => ({ ...prevState, comparison: target.value }));
        } }
      >
        <option>comparação</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ selected.value }
        onChange={ ({ target }) => {
          setSelected((prevState) => ({ ...prevState, value: target.value }));
        } }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Adicionar Filtro

      </button>
    </>
  );
}

export default Filters;
