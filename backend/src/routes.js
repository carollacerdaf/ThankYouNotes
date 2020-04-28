const express = require('express');

const UsersController = require('./controllers/UserController');
const ThankYouNotesController = require('./controllers/ThankYouNotesController');
const BoredNotesController = require('./controllers/BoredNotesController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create);
routes.post('/session', SessionController.create);

routes.post('/thanknotes', ThankYouNotesController.create);
routes.delete('/thanknotes/:id', ThankYouNotesController.delete);
routes.post('/borednotes', BoredNotesController.create);
routes.delete('/borednotes/:id', BoredNotesController.delete);
routes.get('/profiletnotes', ProfileController.indexThankYouNotes);
routes.get('/profilebnotes', ProfileController.indexBoredNotes);
routes.get('/user/:id', UsersController.indexById);

module.exports = routes;