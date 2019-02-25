'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classes', [
      {
        name: 'Sorcerer',
        description: 'Wield enormous power as the magic power of your bloodline courses through you.',
        strength: 8,
        dexterity: 12,
        constitution: 10,
        wisdom: 13,
        intelligence: 14,
        charisma: 15,
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        name: 'Bard',
        description: 'An inspiring musician who uses music to echo power.',
        strength: 8,
        dexterity: 14,
        constitution: 10,
        wisdom: 13,
        intelligence: 12,
        charisma: 15,
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        name: 'Barbarian',
        description: 'Wield enormous power as the magic power of your bloodline courses through you.',
        strength: 15,
        dexterity: 14,
        constitution: 13,
        wisdom: 12,
        intelligence: 10,
        charisma: 8,
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        name: 'Ranger',
        description: 'A well warrior versed in natural and martial arts.',
        strength: 13,
        dexterity: 15,
        constitution: 14,
        wisdom: 12,
        intelligence: 10,
        charisma: 8,
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes', null, {});
  }
};
