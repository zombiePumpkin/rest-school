"use strict";module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'students',
    [
      {
        name: 'Jonas',
        lastname: 'Pedro',
        email: 'jonas@pedro.com',
        age: 21,
        weight: 70.0,
        height: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ana',
        lastname: 'Bocardi',
        email: 'ana@bocardi.com',
        age: 25,
        weight: 64.4,
        height: 1.70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Paulo',
        lastname: 'Roberto',
        email: 'paulo@roberto.com',
        age: 20,
        weight: 87.2,
        height: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Julio',
        lastname: 'Ricardo',
        email: 'julio@ricardo.com',
        age: 19,
        weight: 87.5,
        height: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Antonio',
        lastname: 'Xaves',
        email: 'antonio@xaves.com',
        age: 26,
        weight: 73.8,
        height: 1.74,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'André',
        lastname: 'Gonçalves',
        email: 'andre@goncalves.com',
        age: 22,
        weight: 67.5,
        height: 1.69,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
