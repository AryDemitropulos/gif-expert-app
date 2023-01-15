import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch';

  test('debe de mostrar loading inicialmente', () => {
    useFetchGifs.mockReturnValue({ gifs: [], isLoading: false });

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.findByText('Loading...'));
    expect(screen.findByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'id1',
        title: 'Titulo 1',
        url: 'URL1',
      },
      {
        id: 'id2',
        title: 'Titulo 2',
        url: 'URL2',
      },
    ];
    useFetchGifs.mockReturnValue({ gifs, isLoading: false });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
