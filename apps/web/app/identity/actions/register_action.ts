import { inject } from '@adonisjs/core';
import hash from '@adonisjs/core/services/hash';
import { Result, type Result as ResultType } from 'better-result';
import { TransactionManager } from '#core/utils/transaction';
import User from '#identity/domain/user';
import { EmailAlreadyInUse } from '#identity/errors/email_already_in_use';
import UserRepository from '#identity/repositories/user_repository';

@inject()
export class Register {
	constructor(
		private readonly users: UserRepository,
		private readonly transactions: TransactionManager,
	) {}

	async execute(params: {
		fullName: string;
		email: string;
		password: string;
	}): Promise<ResultType<User, EmailAlreadyInUse>> {
		const passwordHash = await hash.make(params.password);

		return this.transactions.run(async () => {
			const existingUser = await this.users.findByEmail(params.email);

			if (existingUser) {
				return Result.err(new EmailAlreadyInUse());
			}

			return this.users.create({ fullName: params.fullName, email: params.email, passwordHash });
		});
	}
}
