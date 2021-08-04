import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import CharacterDetail from '../../containers/CharacterDetail';
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
