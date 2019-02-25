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
            },
            {
                name: 'Leather Gauntlets',
                flavorText: 'Thick leather gauntlets.',
                protection: 7,
                durability: 10,
                weight: 1,
                value: 10,
                material: 'Leather',
                addedBy: 1,
                placement: 'Hands',
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Leather Boots',
                flavorText: 'Thick leather boots.',
                protection: 5,
                durability: 10,
                weight: 1,
                value: 10,
                material: 'Leather',
                addedBy: 1,
                placement: 'Feet',
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Leather Helmet',
                flavorText: 'Thick leather helmet.',
                protection: 10,
                durability: 7,
                weight: 1,
                value: 15,
                material: 'Leather',
                addedBy: 1,
                placement: 'Head',
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Equipment', null, {});
    }
};
