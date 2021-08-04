
const URL = 'https://rickandmortyapi.com/api/character';
const fetchCharacters = async () => {
  const characters = await fetch(URL);
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

export default fetchCharacters;
