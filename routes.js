module.exports = app => {
    app.use('/api/auth', require('./controllers/authController'));
    app.use('/api/items', require('./controllers/itemController'));
};