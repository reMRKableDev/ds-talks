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

  async getAllEpisodes() {
    const response = await this.service.get(
      'https://www.buzzsprout.com/api/1078358/episodes.json'
    );

    return response.data;
  }
}

export default ApiDataService;
