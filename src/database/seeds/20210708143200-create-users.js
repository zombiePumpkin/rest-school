const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Maria Eduarda',
        email: 'maria@eduarda.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luiz Alberto',
        email: 'luiz@alberto.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'João Antonio',
        email: 'joao@antonio.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jonas Gustavo',
        email: 'jonas@gustavo.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Paulo Onorio',
        email: 'paulo@onorio.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Matheus Moreira',
        email: 'matheus@moreira.com',
        password_hash: await bcryptjs.hash('teste123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
