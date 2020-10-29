import './App.css';

import React, { Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'

import { PokemonsPage } from './pages/PokemonsPage.js'
import { LoginPage } from './pages/LoginPage.js'


function App() {
  return (
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
            {/* TODO: <Route path='/pokemons/:id' component={CardViewPage}/>*/}
            <Route path='/pokemons' component={PokemonsPage}/>
            <Route path='/' component={LoginPage}/>
        </Switch>
      </Suspense>
  );
}

export default App;
