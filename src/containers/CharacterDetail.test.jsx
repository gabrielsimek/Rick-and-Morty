import React from 'react';
import {  render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
const response =  {
  id: '1',
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
};
 


const server = setupServer(

  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(
      ctx.json(response)
    );
  })
);

describe('RickAndMortyCharacters Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {
    render(<MemoryRouter>
      <CharacterDetail match={{ params: { id: 1 }  }} history={{}}/>
    </MemoryRouter>); 
    screen.getByText('...Loading');

    await screen.findAllByText('Rick Sanchez');
    await screen.findAllByText('Human');
    await screen.findAllByText('Alive');
  
  });
});
