import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetailItem from './CharacterDetailItem';
import { MemoryRouter } from 'react-router-dom';
describe('App CharacterDetailItem', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter>
      <CharacterDetailItem character={
        { name: 'name', species: 'species', status: 'status', image: 'image' }
      }/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
