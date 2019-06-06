module.exports = app => {
    app.use('/api/auth', require('./controllers/authController'));

    app.use('/api/classes', require('./controllers/classController'));
    app.use('/api/spells', require('./controllers/spellController'));
};