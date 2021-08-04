import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterDetailItem from '../components/detail/CharacterDetailItem';
import { fetchCharacter } from '../services/rickAndMortyApi';

const CharacterDetail = ({ match, history }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCharacter(match.params.id)
      .then(character => setCharacter(character))
      .then(() => setLoading(false));
  }, []);  
  const handleClick = () => {
    history.push('/');
  }; 
  if(loading) return <h1>...Loading</h1>;
  return (<CharacterDetailItem 
    character={character} 
    onClick={handleClick}
  />
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default CharacterDetail;
