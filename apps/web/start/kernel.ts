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

server.errorHandler(() => import('#core/exceptions/handler'));

server.use([
	() => import('#core/middleware/container_bindings_middleware'),
	() => import('@adonisjs/static/static_middleware'),
	() => import('@adonisjs/cors/cors_middleware'),
	() => import('@adonisjs/vite/vite_middleware'),
	() => import('#core/middleware/inertia_middleware'),
]);

router.use([
	() => import('@adonisjs/core/bodyparser_middleware'),
	() => import('@adonisjs/session/session_middleware'),
	() => import('@adonisjs/shield/shield_middleware'),
	() => import('@adonisjs/auth/initialize_auth_middleware'),
	() => import('#identity/middleware/silent_auth_middleware'),
]);

export const middleware = router.named({
	guest: () => import('#identity/middleware/guest_middleware'),
	auth: () => import('#identity/middleware/auth_middleware'),
});
