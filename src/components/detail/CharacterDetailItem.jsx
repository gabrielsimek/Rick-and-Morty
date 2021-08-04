import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetailItem = (
  { character, name, species, status, image, onClick }) => {
  //refactor this
  return (
    <figure>
      <img 
        src={character.image}/>
      <figcaption>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </figcaption>
      <button
        onClick={onClick}
      >Back</button>
    </figure>
  );
};

CharacterDetailItem.propTypes = {
  // name: PropTypes.string.isRequired,
  // species: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired

};

export default CharacterDetailItem;
