import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
  const title = 'GifExpertApp';
  test('debe de mostrar el titulo de la applicacion', () => {
    render(<GifExpertApp />);
    expect(screen.getByText(title));
  });
});
