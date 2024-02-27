const axios = require('axios');
const { mockServer } = require('axios-mock-server');
const app = require('./index');

describe('GET /users', () => {
  beforeEach(() => {
    mockServer([
      {
        path: '/users',
        methods: ['GET'],
        response: () => [200, [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]],
      },
    ]);
  });

  afterEach(() => {
    axios.mockReset();
  });

  it('should return users', async () => {
    const response = await axios.get('http://localhost:3001/users');
    expect(response.status).toBe(200);
    expect(response.data).toEqual([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]);
  });
});
