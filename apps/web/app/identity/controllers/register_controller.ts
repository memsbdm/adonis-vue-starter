import { inject } from '@adonisjs/core';
import vine from '@vinejs/vine';
import { email, password } from '#app/identity/validators/identity_validator';
import { Register } from '#src/identity/actions/register_action';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class RegisterController {
	static readonly validator = vine.create({
		fullName: vine.string().trim().minLength(1).maxLength(50),
		email: email(),
		password: password().confirmed({ as: 'passwordConfirmation' }),
		passwordConfirmation: vine.string(),
	});

	constructor(private readonly register: Register) {}

	render({ inertia }: HttpContext) {
		return inertia.render('identity/register', {});
	}

	async execute({ auth, i18n, request, response, session }: HttpContext) {
		const payload = await request.validateUsing(RegisterController.validator);
		const result = await this.register.execute(payload);

		if (result.isErr()) {
			const message = result.error.match({ EmailAlreadyInUse: () => i18n.t('messages.identity.email_already_in_use') });
			session.flash('error', message);

			return response.redirect().back();
		}

		await auth.use('web').login(result.value);

		return response.redirect('/');
	}
}
