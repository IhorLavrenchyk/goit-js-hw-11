import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '33369159-12dbd94a1e76cccc8767e4305';

export async function fetchArticles(query, page, perPage) {
  const res = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return res;
}
