import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
