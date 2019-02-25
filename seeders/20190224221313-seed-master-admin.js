'use strict';
const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', 
      [
        {
          fullName: 'Alecx Moritz',
          email: 'admin@email.com',
          password: bcrypt.hashSync('zeroTwo', 10),
          addedBy: 0,
          createdAt: '2019-02-19 08:26:34.612-05',
          updatedAt: '2019-02-19 08:26:34.612-05'
        },
        {
        fullName: 'Velma Dinkley',
        email: 'velms27@email.com',
        password: bcrypt.hashSync('cryptidFan', 10),
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        fullName: 'Daphne Blake',
        email: 'daph@email.com',
        password: bcrypt.hashSync('velmasCute', 10),
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        fullName: 'Shaggy Rogers',
        email: 'shagster@email.com',
        password: bcrypt.hashSync('sandwiches', 10),
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
      {
        fullName: 'Fred Jones',
        email: 'fJones@email.com',
        password: bcrypt.hashSync('Strongman', 10),
        addedBy: 1,
        createdAt: '2019-02-19 08:26:34.612-05',
        updatedAt: '2019-02-19 08:26:34.612-05'
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('Users', null, {});
  }
};
