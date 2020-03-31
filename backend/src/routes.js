const express = require('express');

const UsersController = require('./controllers/UserController');
const ThankYouNotesController = require('./controllers/ThankYouNotesController');
const BoredNotesController = require('./controllers/BoredNotesController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create);
routes.post('/thanknotes', ThankYouNotesController.create);
routes.post('/borednotes', BoredNotesController.create);
routes.get('/profiletnotes', ProfileController.indexThankYouNotes);
routes.get('/profilebnotes', ProfileController.indexBoredNotes);

module.exports = routes;