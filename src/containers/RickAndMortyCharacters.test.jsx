import React from 'react';
import {  render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import RickAndMortyCharacters from './RickAndMortyCharacters';
const response = { results: 
  [...Array(20)].map((_, i) => {
    return  {
      id: i,
      name: `Character${i}`,
      status: `Status${i}`,
      species: `Species${i}`,
      image: `http://image${i}.com`
    };
  }) };  


const server = setupServer(

  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.json(response)
    );
  })
);

describe('RickAndMortyCharacters Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {
    render(<MemoryRouter><RickAndMortyCharacters/></MemoryRouter>); 
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(20);
  });
});
