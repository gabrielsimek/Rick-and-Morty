import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import RickAndMortyCharacters from '../../containers/RickAndMortyCharacters';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:id"
          render={routerProps => {
            return <CharacterDetail {...routerProps} />;
          }}
        />
        <Route path="/"
          render={routerProps => {
            return <RickAndMortyCharacters {...routerProps} />;
          }}
        />
      </Switch>
    </Router>
  ); 
}
