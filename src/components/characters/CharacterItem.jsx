import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterItem = ({ name, species, status, image, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <figure>
        <img 
          src={image}/>
        <figcaption>
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{status}</p>
        
        </figcaption>
      </figure>
    </Link>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired

};

export default CharacterItem;
