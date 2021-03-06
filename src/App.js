import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <Route component={PokemonList} />
      <Route path='/pokemon/:id' component={PokemonDetail} />
    </Router>
  );
}

export default App;