import { symbols } from '@adonisjs/auth';
import { inject } from '@adonisjs/core';
import User from '#identity/domain/user';
import UserRepository from '#identity/repositories/user_repository';
import type { SessionGuardUser, SessionUserProviderContract } from '@adonisjs/auth/types/session';
import type { ApplicationService } from '@adonisjs/core/types';

@inject()
export class SessionKyselyUserProvider implements SessionUserProviderContract<User> {
	declare [symbols.PROVIDER_REAL_USER]: User;

	constructor(private readonly users: UserRepository) {}

	async createUserForGuard(user: User): Promise<SessionGuardUser<User>> {
		return { getId: () => user.id, getOriginal: () => user };
	}

	async findById(id: string) {
		const user = await this.users.findById(id);

		return user ? this.createUserForGuard(user) : null;
	}
}

export function makeSessionKyselyUserProvider(app: ApplicationService) {
	return app.container.make(SessionKyselyUserProvider);
}
