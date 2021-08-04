

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
  // const Jsonchar = await characters.json();
  // // console.log(Jsonchar);
  const characterObj = await character.json();
  // console.log(name, status, species, image);
  return characterObj; 
};

export { fetchCharacters, fetchCharacter };
