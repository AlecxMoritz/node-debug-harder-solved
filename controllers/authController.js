const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/index').sequelize.import('../models/user');

router.post('/token', (req, res) => {
    let reqUser = req.body.user;

    User.findOne({
        where: {
            email: reqUser.email
        }
    })
    .then(
        findSuccess = user => {
            bcrypt.compare(reqUser.password, user.password)
            .then(matches => {
                if(matches) {
                    console.log('matches :', matches)
                    const token = jwt.sign({ id: user. id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
    
                    res.status(200).json({
                        user : user,
                        token : token
                    });
    
                } else {
                    res.status(500).json("Username and password combination doesn't match.");
                }
            });
        },

        findFail = user => {
            res.status(500).json("Username and password combination doesn't match.");
        }
    )
})

router.post('/create', (req, res) => {
    const user = req.body.user;

    User.create({
        fullName: user.fullName,
        email: user.email,
        password: bcrypt.hashSync(user.password, 12)
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

module.exports = router;