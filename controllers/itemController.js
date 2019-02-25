const router = require('express').Router();
const Item = require('../models/index').sequelize.import('../models/item');
const validateSession = require('../middleware/validate-session');

// post
router.post('/', validateSession, (req, res) => {

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