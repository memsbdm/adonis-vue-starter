import { inject } from '@adonisjs/core';
import vine from '@vinejs/vine';
import { Login } from '#identity/actions/login_action';
import { email } from '#identity/validators/identity_validator';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class LoginController {
	static readonly validator = vine.create({ email: email(), password: vine.string().minLength(8).maxLength(72) });

	constructor(private readonly login: Login) {}

	render({ inertia }: HttpContext) {
		return inertia.render('identity/login', {});
	}

	async execute({ auth, i18n, request, response, session }: HttpContext) {
		const payload = await request.validateUsing(LoginController.validator);
		const result = await this.login.execute(payload);

		if (result.isErr()) {
			const message = result.error.match({ InvalidCredentials: () => i18n.t('messages.identity.invalid_credentials') });
			session.flash('error', message);

			return response.redirect().back();
		}

		await auth.use('web').login(result.value);

		return response.redirect('/');
	}
}
