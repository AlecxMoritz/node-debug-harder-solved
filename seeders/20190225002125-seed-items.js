'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Items', [
            {
                name: 'Gold',
                flavorText: 'Currency. Used for purchases',
                weight: 0,
                value: 1,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Minor Health Potion',
                flavorText: 'Restores 20 HP',
                weight: 1,
                value: 10,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Minor Mana Potion',
                flavorText: 'Restores 20 MP',
                weight: 1,
                value: 10,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Minor Stamina Potion',
                flavorText: 'Restores 20 Stamina',
                weight: 1,
                value: 10,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Roll of Paper',
                flavorText: 'A rolled up piece of paper.',
                weight: 0,
                value: 2,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Charcoal',
                flavorText: 'A piece of charcoal used for writing.',
                weight: 0,
                value: 1,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Rope',
                flavorText: 'A 15ft length of rope.',
                weight: 4,
                value: 10,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Quil',
                flavorText: 'A writing quil.',
                weight: 0,
                value: 2,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Bottle of Ink',
                flavorText: 'A small bottle of ink.',
                weight: 0,
                value: 4,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Lockpick',
                flavorText: 'Sturdy lockpick',
                weight: 0,
                value: 2,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Tinderbox',
                flavorText: 'Basic tinderbox. Used for lighting campfires.',
                weight: 2,
                value: 5,
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Items', null, {});
    }
};
