import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  const charactersList = characters.map(character => {
    return (
      <li key={character.id}>
        <CharacterItem 
          {...character}         
        />
      </li>
    );
  });


  return <ul>{charactersList}</ul>;

};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired

    })
  )
};

export default CharacterList;
