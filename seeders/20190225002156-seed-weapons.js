'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Weapons', [
            {
                name: 'Iron Sword',
                flavorText: 'A cheap iron sword.',
                damage: 10,
                durability: 15,
                weight: 5,
                value: 15,
                material: 'Iron',
                type: 'Sword',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Weapons', null, {});
    }
};
