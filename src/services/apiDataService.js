import axios from 'axios';

class ApiDataService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BUZZSPROUT_API_KEY,
      headers: {
        Authorization: `Bearer token=${process.env.NEXT_PUBLIC_BUZZSPROUT_API_KEY}`,
      },
    });
  }

  async getAllEpisodes() {
    const response = await this.service.get(
      process.env.NEXT_PUBLIC_BUZZSPROUT_URL
    );

    return response.data;
  }
}

export default ApiDataService;
