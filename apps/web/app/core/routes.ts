/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import { controllers } from '#generated/controllers';
import { middleware } from '#start/kernel';

const { core } = controllers;

router.on('/').renderInertia('home', {}).as('home');

router.get('/health', [core.HealthChecks, 'execute']).use(middleware.requireSecretToken());
