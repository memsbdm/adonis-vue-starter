/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import router from '@adonisjs/core/services/router';
import server from '@adonisjs/core/services/server';

server.errorHandler(() => import('#app/core/exceptions/handler'));

server.use([
	() => import('#app/core/middleware/container_bindings_middleware'),
	() => import('@adonisjs/static/static_middleware'),
	() => import('@adonisjs/cors/cors_middleware'),
	() => import('@adonisjs/vite/vite_middleware'),
	() => import('#app/core/middleware/inertia_middleware'),
]);

router.use([
	() => import('@adonisjs/core/bodyparser_middleware'),
	() => import('@adonisjs/session/session_middleware'),
	() => import('@adonisjs/shield/shield_middleware'),
	() => import('@adonisjs/auth/initialize_auth_middleware'),
	() => import('#app/identity/middleware/silent_auth_middleware'),
	() => import('#app/core/middleware/detect_user_locale_middleware'),
]);

export const middleware = router.named({
	guest: () => import('#app/identity/middleware/guest_middleware'),
	auth: () => import('#app/identity/middleware/auth_middleware'),
	requireSecretToken: () => import('#app/core/middleware/require_secret_token_middleware'),
});
