import axios from 'axios';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async (searchQuery, currentPage) => {
  const response = await axios.get(`search/photos/`, {
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
