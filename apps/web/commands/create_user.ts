import { BaseCommand, flags } from '@adonisjs/core/ace';
import vine from '@vinejs/vine';
import { make } from '#app/core/utils/index';
import { email, password } from '#app/identity/validators/identity_validator';
import { Register } from '#src/identity/actions/register_action';
import type { CommandOptions } from '@adonisjs/core/types/ace';

const validator = vine.create({
	fullName: vine.string().trim().minLength(1).maxLength(50),
	email: email(),
	password: password(),
});

export default class CreateUser extends BaseCommand {
	static commandName = 'create:user';
	static description = 'Create a user with a name, email, and password';
	static options: CommandOptions = { startApp: true };

	@flags.string({ description: 'User name' })
	declare name?: string;

	@flags.string({ description: 'User email' })
	declare email?: string;

	@flags.string({ description: 'User password' })
	declare password?: string;

	async run() {
		const [validationError, payload] = await validator.tryValidate({
			fullName: this.name ?? (await this.prompt.ask<string>('What is the user name?')),
			email: this.email ?? (await this.prompt.ask<string>('What is the user email?')),
			password: this.password ?? (await this.prompt.secure<string>('What is the user password?')),
		});

		if (validationError) {
			this.logger.error(validationError.messages[0]?.message ?? 'The user details are invalid.');
			this.exitCode = 1;

			return;
		}

		const register = await make(Register);
		const result = await register.execute(payload);

		if (result.isErr()) {
			this.logger.error(result.error.match({ EmailAlreadyInUse: () => 'An account already exists for this email.' }));
			this.exitCode = 1;

			return;
		}

		this.logger.success(`User ${result.value.email} created successfully`);
		this.logger.info(`User ID: ${result.value.id}`);
	}
}
