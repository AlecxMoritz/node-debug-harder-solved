const router = require('express').Router();
const Weapon = require('../models/index').sequelize.import('../models/weapon');

// post
router.post('/', validateSession, (req, res) => {
    let weapon = req.body.weapon;

    Weapon.create({
        name : weapon.name,
        flavorText: weapon.flavorText,
        manaCost : weapon.manaCost,
        damage : weapon.damage,
        range : weapon.range,
        type : weapon.type,
        addedBy : req.user.id
    })
        .then(
            createSuccess = newWeapon => {
                res.status(200).json(newWeapon);
            },

            createFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            })
});

// get array of ids
router.get('/list', validateSession, (req, res) => {
    const weapon = req.body.weapon;

    Weapon.findAll({
        where: {
            id: weapon.ids
        }
    })
        .then(
            findSuccess = weapons => {
                res.status(200).json(weapons);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// get by id
router.get('/:id', validateSession, (req, res) => {
    Weapon.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(
            findSuccess = weapon => {
                res.status(200).json(weapon);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});


// get all
router.get('/', validateSession, (req, res) => {
    Weapons.findAll()
        .then(
            findSuccess = weapon => {
                res.status(200).json(weapon);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// update
router.put('/:id', validateSession, (req, res) => {
    const weapon = req.body.weapon;

    Weapon.update({
        name : weapon.name,
        flavorText: weapon.flavorText,
        manaCost : weapon.manaCost,
        damage : weapon.damage,
        range : weapon.range,
        type : weapon.type,
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(
            updateSuccess = recordsChanged => {
                res.status(200).send(`${recordsChanged} records(s) changed.`)
            },

            updateFail = err => {
                res.status(500).send(err.message);
            }
        )
});

// delete
router.delete('/:id', validateSession, (req, res) => {
    Weapon.destroy({
        where: {
            id: req.params.id,
        }
    })
        .then(
            destroySuccess = recordsChanged => {
                res.status(200).send(`${recordsChanged} record(s) changed.`);
            },

            destroyFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});


module.exports = router;