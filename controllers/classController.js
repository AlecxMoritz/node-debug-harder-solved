const router = require('express').Router();
const Class = require('../models/index').sequelize.import('../models/class');
const validateSession = require('../middleware/validate-session');

// get class info by id
router.get('/:id', validateSession, (req, res) => {
    Class.findOne({
        where: {
            id: req.params.id,
            addedBy : req.body.user.id
        }
    })
        .then(
            findSuccess = foundClass => {
                res.status(200).json(foundClass);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            });
});

router.get('/', validateSession, (req, res) => {
    Class.findAll({ where : { id : req.user.id }})
        .then(
            findSuccess = classes => {
                res.status(200).json(classes);
            },

            findFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            });
})

// create new class
router.post('/', validateSession, (req, res) => {
    const reqClass = req.body.class;

    Class.create({
        name: reqClass.name,
        description: reqClass.description,
        strength: reqClass.strength,
        dexterity: reqClass.dexterity,
        constitution: reqClass.constitution,
        wisdom: reqClass.wisdom,
        intelligence: reqClass.intelligence,
        charisma: reqClass.charisma,
        addedBy: req.user.id
    })
        .then(
            createSuccess = newClass => {
                res.status(200).json(newClass);
            },

            createFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            });
});

// delete class
router.delete('/:id', validateSession, (req, res) => {
    Class.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(
            deleteSuccess = recordsDeleted => {
                res.status(200).json(`${recordsDeleted} class(es) deleted.`)
            },

            deleteFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
})



// update class info
router.put('/:id', validateSession, (req, res) => {
    let reqClass = req.body.class;

    Class.update({
        name: reqClass.name,
        description: reqClass.description,
        strength: reqClass.strength,
        dexterity: reqClass.dexterity,
        constitution: reqClass.constitution,
        wisdom: reqClass.wisdom,
        intelligence: reqClass.intelligence,
        charisma: reqClass.charisma,
    }, {
            where: {
                id: req.params.class
            }
        })
        .then(
            updateSuccess = recordsChanged => {
                res.status(200).json(`${recordsChanged} record(s) changed.`)
            },

            updateFail = err => {
                console.log(err.message);
                res.status(500).send(err.message);
            }
        )
})



module.exports = router;