const { createUser, findUserById, users } = require('./userService');

describe('User Service', () => {
  beforeEach(() => {
    // Clear users array before each test
    users.length = 0;
  });

  test('creates a user successfully', () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const user = createUser(userData);
    
    expect(user).toHaveProperty('id');
    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
    expect(user).toHaveProperty('createdAt');
    expect(users).toHaveLength(1);
  });

  // ... rest of your tests
});
