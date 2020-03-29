const express = require('express');
const connection = require('./database/connection');

const UsersController = require('./controllers/UserController');
const ThankYouNoteController = require('./controllers/ThankYouNoteController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create);
routes.post('/tnotes', ThankYouNoteController.create);
routes.post('/profiletnotes', ProfileController.index);

module.exports = routes;