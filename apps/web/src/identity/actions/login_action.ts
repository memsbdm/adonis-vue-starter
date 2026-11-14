import { inject } from '@adonisjs/core';
import hash from '@adonisjs/core/services/hash';
import { Result, type Result as ResultType } from 'better-result';
import User from '#src/identity/domain/user';
import { InvalidCredentials } from '#src/identity/errors/invalid_credentials';
import UserRepository from '#src/identity/repositories/user_repository';

@inject()
export class Login {
	constructor(private readonly users: UserRepository) {}

	async execute(params: { email: string; password: string }): Promise<ResultType<User, InvalidCredentials>> {
		const user = await this.users.findByEmail(params.email);

		if (!user) {
			await hash.make('invalid-password');

			return Result.err(new InvalidCredentials());
		}

		const passwordIsValid = await hash.verify(user.passwordHash, params.password);

		return passwordIsValid ? Result.ok(user) : Result.err(new InvalidCredentials());
	}
}
