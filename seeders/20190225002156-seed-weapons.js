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
            },
            {
                name: 'Steel Sword',
                flavorText: 'A sturdy iron sword.',
                damage: 15,
                durability: 20,
                weight: 7,
                value: 25,
                material: 'Steel',
                type: 'Sword',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Ebony Sword',
                flavorText: 'A frighteningly sharp ebony sword. The blade is black as night.',
                damage: 10,
                durability: 15,
                weight: 5,
                value: 15,
                material: 'Ebony',
                type: 'Sword',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Whispering Blade',
                flavorText: 'A very thin blade. It makes a mysterious sound.',
                damage: 10,
                durability: 15,
                weight: 5,
                value: 15,
                material: 'Unknown',
                type: 'Sword',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Weapons', null, {});
    }
};
