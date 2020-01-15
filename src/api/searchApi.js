import axios from '@grl/lib/axios';

/* eslint import/prefer-default-export: "off" */
export const searchRepo = ({ q, page = 1, perPage = 10 }) =>
  axios.get('/search/repositories', {
    params: {
      q,
      page,
      per_page: perPage,
    },
  });
