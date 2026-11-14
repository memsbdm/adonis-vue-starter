import router from '@adonisjs/core/services/router';
import { controllers } from '#generated/controllers';
import { middleware } from '#start/kernel';

const { identity } = controllers;

router.get('/login', [identity.Login, 'render']).use(middleware.guest());
router.post('/login', [identity.Login, 'execute']).use(middleware.guest());
router.get('/register', [identity.Register, 'render']).use(middleware.guest());
router.post('/register', [identity.Register, 'execute']).use(middleware.guest());
router.post('/logout', [identity.Logout, 'execute']).use(middleware.auth());
