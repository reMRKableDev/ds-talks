const mockAxios = jest.createMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
