const router = require('express').Router();
const Spell = require('../models/index').sequelize.import('../models/spell');
const validateSession = require('../middleware/validate-session');
// post
router.post('/', validateSession, (req, res) => {
    let spell = req.body.spell;

    Spell.create({
        name : spell.name,
        flavorText: spell.flavorText,
        manaCost : spell.manaCost,
        damage : spell.damage,
        range : spell.range,
        type : spell.type,
        addedBy : req.user.id
    })
        .then(
            createSuccess = newSpell => {
                res.status(200).json(newSpell);
            },

            createFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            })
});

// get array of ids
router.get('/list', validateSession, (req, res) => {
    const spell = req.body.spell;

    Spell.findAll({
        where: {
            id: spell.ids
        }
    })
        .then(
            findSuccess = spells => {
                res.status(200).json(spells);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// get by id
router.get('/:id', validateSession, (req, res) => {
    Spell.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(
            findSuccess = spell => {
                res.status(200).json(spell);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});


// get all
router.get('/', validateSession, (req, res) => {
    Spell.findAll()
        .then(
            findSuccess = spells => {
                res.status(200).json(spells);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
});

// update
router.put('/:id', validateSession, (req, res) => {
    const spell = req.body.spell;

    Spell.update({
        name : spell.name,
        flavorText: spell.flavorText,
        manaCost : spell.manaCost,
        damage : spell.damage,
        range : spell.range,
        type : spell.type,
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
    Spell.destroy({
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