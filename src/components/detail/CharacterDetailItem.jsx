import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetailItem = ({ name, species, status, image, onClick }) => {
  return (
    <figure>
      <img 
        src={image}/>
      <figcaption>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{status}</p>
      </figcaption>
      <button
        onClick={onClick}
      >Back</button>
    </figure>
  );
};

CharacterDetailItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired

};

export default CharacterDetailItem;
