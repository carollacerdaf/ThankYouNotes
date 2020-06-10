const express = require('express');
const { celebrate, Segments, Joi} =  require('celebrate');

const UsersController = require('./controllers/UserController');
const ThankYouNotesController = require('./controllers/ThankYouNotesController');
const BoredNotesController = require('./controllers/BoredNotesController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/users', UsersController.index)
routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email:Joi.string().required().email(),
        password: Joi.string().required(),
    })
}), UsersController.create);

routes.delete('/users', UsersController.delete)


routes.post('/session', SessionController.create);

routes.post('/thanknotes', celebrate({
    [Segments.BODY]: Joi.object().keys({
        note: Joi.string().required()
    })
}), ThankYouNotesController.create);

routes.delete('/thanknotes/:id', ThankYouNotesController.delete);
routes.post('/borednotes', celebrate({
    [Segments.BODY]: Joi.object().keys({
        note: Joi.string().required()
    })
}), BoredNotesController.create);
routes.delete('/borednotes/:id', BoredNotesController.delete);
routes.get('/profiletnotes', ProfileController.indexThankYouNotes);
routes.get('/profilebnotes', ProfileController.indexBoredNotes);
routes.get('/user/:id', UsersController.indexById);

module.exports = routes;