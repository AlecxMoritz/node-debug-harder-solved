const router = require('express').Router();
const Item = require('../models/index').sequelize.import('../models/item');
const validateSession = require('../middleware/validate-session');

// post
router.post('/', validateSession, (req, res) => {
    const item = req.body.item;
    Item.create({
        name : item.name,
        flavorText : item.flavorText,
        weight : item.weight,
        value : item.value,
        addedBy : req.user.id
    })
    .then(
        createSuccess = newItem => {
            res.status(200).json(newItem);
        },

        createFail = err => {
            console.log(err.message);
            res.status(500).send(err.message);
        })
});

// get by id
router.get('/:id', validateSession, (req, res) => {
    
});

// get all
router.get('/', validateSession, (req, res) => {
    
});

// get array of ids
router.get('/list', validateSession, (req, res) => {

});

// update
router.put('/:id', validateSession, (req, res) => {
    
});

// delete
router.delete('/:id', validateSession, (req, res) => {
    
});


module.exports = router;