import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem/>', () => {
  const title = 'Naruto';
  const url = 'https://naruto.com/naruto.jpg';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem url={url} title={title} />);

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe de mostrar el titulo en el componente', () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
