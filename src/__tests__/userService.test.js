const { createUser, findUserById } = require('./userService');

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
  });

  test('throws error when name or email is missing', () => {
    expect(() => createUser({ name: 'John' })).toThrow('Name and email are required');
    expect(() => createUser({ email: 'john@example.com' })).toThrow('Name and email are required');
  });

  test('finds user by id', () => {
    const user = createUser({ name: 'Jane', email: 'jane@example.com' });
    const foundUser = findUserById(user.id);
    
    expect(foundUser).toEqual(user);
    expect(findUserById('nonexistent')).toBeUndefined();
  });
});
