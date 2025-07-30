const users = [];

function createUser(userData) {
  if (!userData.name || !userData.email) {
    throw new Error('Name and email are required');
  }

  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date()
  };
  
  users.push(newUser);
  return newUser;
}

function findUserById(id) {
  return users.find(user => user.id === id);
}

module.exports = { createUser, findUserById };
