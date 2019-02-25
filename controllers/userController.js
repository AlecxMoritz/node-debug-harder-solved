const router = require('express').Router();
const User = require('../models/index').sequelize.import('../models/user');
const validateSession = require('../middleware/validate-session');
const bcrypt = require('bcryptjs');

// get user info by id
router.get('/:id', validateSession, (req, res) => {
    User.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(
        findSuccess = user => {
            res.status(200).json(user);
        },

        findFail = err => {
            console.log(err.message);
            res.status(500).send(err.message);
        });
});

// create new user
router.post('/', validateSession, (req, res) => {
    const user = req.body.user;
    
    User.create({
        fullName : user.name,
        email : user.email,
        password : bcrypt.hashSync(user.password, 10),
        addedBy: req.user.id
    })
    .then(
        createSuccess = newUser => {
            res.status(200).json(newUser);
        },

        createFail = err => {
            console.log(err.message);
            res.status(500).send(err.message);
        });
});

// delete user
router.delete('/:id', validateSession, (req, res) => {
    User.destroy({
        where: {
            id : req.params.id
        }
    })
    .then(
        deleteSuccess = recordsDeleted => {
            res.status(200).json(`${recordsDeleted} user(s) deleted.`)
        },

        deleteFail = err => {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    )
})

// update user info
router.put('/:id', validateSession, (req, res) => {
    let user = req.body.user;

    User.update({
        fullName : user.fullName,
        email : user.email,
        password : bcrypt.hashSync(user.password, 10)
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