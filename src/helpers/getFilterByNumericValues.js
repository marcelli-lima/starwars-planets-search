export default function getFilterByNumericValues(planet, filterByNumericValues) {
  const { column, comparison, value } = filterByNumericValues;
  if (comparison === 'igual a') return Number(planet[column]) === Number(value);
  if (comparison === 'menor que') return Number(planet[column]) < Number(value);
  if (comparison === 'maior que') return Number(planet[column]) > Number(value);
  return true;
}
