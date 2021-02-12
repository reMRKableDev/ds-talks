import mockAxios from 'axios';

import ApiDataService from './apiDataService';
import validators from '../utils/test-validators';
import { fakeUserList } from '../utils/fixtures';

const {
  validateMockCalls,
  validateNotEmptyData,
  validateArrayContaining,
  validateMockToHaveBeenCalledWith,
} = validators;

let getData;

beforeEach(() => {
  getData = mockAxios.get;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('API Data Service Test Suite', () => {
  test('should validate', async () => {
    getData.mockImplementationOnce(() =>
      Promise.resolve({ data: fakeUserList })
    );

    const podcastService = new ApiDataService();
    podcastService.service = mockAxios;

    const results = await podcastService.getAllEpisodes();

    validateNotEmptyData(results);
    validateArrayContaining(results, fakeUserList);

    validateMockCalls(getData, 1);
    validateMockToHaveBeenCalledWith(
      getData,
      'https://www.buzzsprout.com/api/1078358/episodes.json'
    );
  });
});
