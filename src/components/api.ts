import axios from 'axios';
import { Image, UnsplashApiResponse } from '../types';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async (
  searchQuery: string,
  currentPage: number
): Promise<Image[]> => {
  const response = await axios.get<UnsplashApiResponse>(`search/photos/`, {
    params: {
      client_id: `NPqSl0Eb8PahzdO2vxdZhDCUmsoVzuAFvt4XnoVEOYY`,
      query: searchQuery,
      per_page: 12,
      page: currentPage,
      orientation: `landscape`,
    },
  });
  return response.data.results;
};
