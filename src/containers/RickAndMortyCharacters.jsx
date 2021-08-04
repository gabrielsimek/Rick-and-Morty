import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';



const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters))
      .then(() => setLoading(false));
  });  

  if(loading) return <h1>Loading...</h1>;
  
  return (
    <>
      <CharacterList characters={characters}/>
    </>
  );
};

export default RickAndMortyCharacters;
