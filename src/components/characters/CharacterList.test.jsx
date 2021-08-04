import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';
describe('App CharacterList', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter><CharacterList characters={
      [{ name: 'name', species: 'species', status: 'status', image: 'image' }]
    }/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
