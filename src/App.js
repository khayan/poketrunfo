import React from 'react';
import logo from '../src/img/icons/pokeball.png';
import './App.css';
import pokemons from './pokemons'

export default function App() {
  console.log(pokemons);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Poké Trunfo
        </p>
        {
          pokemons.map(pokemon => <img src={pokemon} alt="pokemon" />)
        }
      </header>
    </div>
  );
}