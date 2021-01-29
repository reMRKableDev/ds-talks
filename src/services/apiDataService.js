import axios from 'axios';

class ApiDataService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BUZZSPROUT_API_KEY,
      headers: {
        Authorization: `Bearer token=${process.env.REACT_APP_BUZZSPROUT_API_KEY}`,
      },
    });
  }

  getAllEpisodes = () =>
    this.service
      .get('https://www.buzzsprout.com/api/1078358/episodes.json')
      .then((response) => response);
}

export default ApiDataService;
