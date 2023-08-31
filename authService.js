// authService.js
const mockUsers = [
    { username: 'user1', password: 'Password123!' },
    { username: 'user2', password: 'Secret456@' },
  ];
  
  export const authenticate = (username, password) => {
    const user = mockUsers.find((user) => user.username === username && user.password === password);
    return user;
  };
  