// Mock users for demo.
// Admin: email=admin@test.com, pass=admin
// Subadmin: email=sub@test.com, pass=sub
// Regular user: email=user@test.com, pass=user (auto-created on register)
export const mockUsers = [
  { id: 1, email: 'admin@test.com', password: 'admin', role: 'admin' },
  { id: 2, email: 'sub@test.com', password: 'sub', role: 'subadmin' },
  { id: 2, email: 'user@test.com', password: 'user', role: 'subadmin' },
];

