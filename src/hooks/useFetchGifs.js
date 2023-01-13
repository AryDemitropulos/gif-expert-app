import { useEffect, useState } from 'react';
import getGifts from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadGifs() {
    setIsLoading(true);
    const gif = await getGifts(category);
    setGifs(gif);
    setIsLoading(false);
  }
  useEffect(() => {
    loadGifs();
  }, []);

  return { gifs, isLoading };
};
