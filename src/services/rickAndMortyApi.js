

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
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`);
 
  const characterObj = await character.json();

  return characterObj; 
};

export { fetchCharacters, fetchCharacter };
