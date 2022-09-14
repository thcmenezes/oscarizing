'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Best Picture',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Actor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Actress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supporting Actor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supporting Actress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Directing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Original Screenplay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Adapted Screenplay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cinematography', createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Editing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Visual Effects',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Foreign-Language Film',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animated Feature Film',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
