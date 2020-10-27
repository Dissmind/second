import './App.css';

import React, { Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './componets/Login/Login.js'
import Pokemons from './componets/Pokemons/Pokemons.js'

const PokemonsS = (
    <Suspense fallback={<p>Loading</p>}>
        <Pokemons />
    </Suspense>
)

function App() {


  return (
    <Switch>
      <Route path='/pokemons' component={Pokemons}/>
      <Route path='/' component={Login}/>
    </Switch>
  );
}

export default App;
