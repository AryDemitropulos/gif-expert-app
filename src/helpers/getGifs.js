export default  async function getGifts(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mSKHrumBmX492p5rv1yLOGbA356VUcnk&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }));
    return gifs;
  }
