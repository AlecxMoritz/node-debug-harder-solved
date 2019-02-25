'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Spells', [
            {
                name: 'Fireball',
                flavorText: 'Point two fingers and unleash a giant fireball.',
                manaCost: 40,
                damage: 35,
                range: 40,
                type: 'Fire Spell',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Ice Spike',
                flavorText: 'Shoot a massive shard of ice from your palm.',
                manaCost: 15,
                damage: 15,
                range: 25,
                type: 'Ice Spell',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Thunderbolt',
                flavorText: 'Call upon thunder to lash out at your enemies.',
                manaCost: 20,
                damage: 25,
                range: 20,
                type: 'Thunder Spell',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
            {
                name: 'Dimension Door',
                flavorText: 'Open a portal to a place you can see, within 100ft.',
                manaCost: 50,
                damage: 0,
                range: 100,
                type: 'Misc Spell',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Spells', null, {});
    }
};
