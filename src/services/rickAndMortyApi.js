

const fetchCharacters = async () => {
  const characters = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await characters.json();
  return results.map(({ id, name, status, species, image }) => (
    {
      id,
      name,
      status,
      species,
      image 
    }
  ));
};

const fetchCharacter = async (id) => {
  const characters = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`);
  const { name, status, species, image } = await characters.json();
  return (
    {
      name,
      status,
      species,
      image
    }
  ); 
};

export { fetchCharacters, fetchCharacter };
