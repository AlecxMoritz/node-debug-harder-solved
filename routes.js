module.exports = app => {
    app.use('/api/auth', require('./controllers/authController'));
    app.use('/api/items', require('./controllers/itemController'));
    app.use('/api/spells', require('./controllers/spellController'));
    app.use('/api/weapons', require('./controllers/weaponController'));
    app.use('/api/equipment', require('./controllers/equipmentController'));
};