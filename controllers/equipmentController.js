const router = require('express').Router();
const Equipment = require('../models/index').sequelize.import('../models/equipment');
const validateSession = require('../middleware/validate-session');

// post
router.post('/', validateSession, (req, res) => {
    let equipment = req.body.equipment;

    Equipment.create({
        name : equipment.name,
        flavorText: equipment.flavorText,
        protection : equipment.protection,
        durability : equipment.durability,
        weight : equipment.weight,
        value : equipment.value,
        material : equipment.material,
        placement : equipment.placement,
        addedBy : req.user.id
    })
        .then(
            createSuccess = newEquipment => {
                res.status(200).json(newEquipment);
            },

            createFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            })
});

// get array of ids
router.get('/list', validateSession, (req, res) => {
    const equipment = req.body.equipment;

    Equipment.findAll({
        where: {
            id: equipment.ids
        }
    })
        .then(
            findSuccess = multipleEquipment => {
                res.status(200).json(multipleEquipment);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// get by id
router.get('/:id', validateSession, (req, res) => {
    Equipment.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(
            findSuccess = equipment => {
                res.status(200).json(equipment);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});


// get all
router.get('/', validateSession, (req, res) => {
    Equipment.findAll()
        .then(
            findSuccess = equipment => {
                res.status(200).json(equipment);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// update
router.put('/:id', validateSession, (req, res) => {
    const equipment = req.body.equipment;

    Equipment.update({
        name : equipment.name,
        flavorText: equipment.flavorText,
        protection : equipment.protection,
        durability : equipment.durability,
        weight : equipment.weight,
        value : equipment.value,
        material : equipment.material,
        placement : equipment.placement,
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
    Equipment.destroy({
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