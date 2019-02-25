'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Spells', [
            {
                name: 'Fireball',
                flavorText: 'Point two fingers and unleash a giant fireball',
                manaCost: 40,
                damage: 25,
                range: 40,
                type: 'Fire Spell',
                addedBy: 1,
                createdAt: '2019-02-19 08:26:34.612-05',
                updatedAt: '2019-02-19 08:26:34.612-05'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Spells', null, {});
    }
};
