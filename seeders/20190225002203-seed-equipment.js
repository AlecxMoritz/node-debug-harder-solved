'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Equipment', [
            {
                name: 'Leather Armor',
                flavorText: 'Thick leather armor',
                protection: 15,
                durability: 15,
                weight: 2,
                value: 20,
                material: 'Leather',
                addedBy: 1,
                placement: 'Chest',
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Equipment', null, {});
    }
};
