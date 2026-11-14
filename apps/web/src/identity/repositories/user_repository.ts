import { randomUUIDv7 } from 'node:crypto';
import { inject } from '@adonisjs/core';
import { Result, type Result as ResultType } from 'better-result';
import postgres from 'postgres';
import { TransactionManager } from '#app/core/utils/transaction';
import User from '#src/identity/domain/user';
import { EmailAlreadyInUse } from '#src/identity/errors/email_already_in_use';

const userColumns = ['id', 'name', 'email', 'password', 'created_at', 'updated_at'] as const;

@inject()
export default class UserRepository {
	constructor(private readonly transactions: TransactionManager) {}

	async findByEmail(email: string) {
		const row = await this.transactions
			.currentDatabase()
			.selectFrom('users')
			.select(userColumns)
			.where('email', '=', email)
			.executeTakeFirst();

		return row ? this.#toUser(row) : null;
	}

	async findById(id: string) {
		const row = await this.transactions
			.currentDatabase()
			.selectFrom('users')
			.select(userColumns)
			.where('id', '=', id)
			.executeTakeFirst();

		return row ? this.#toUser(row) : null;
	}

	async create(params: {
		fullName: string;
		email: string;
		passwordHash: string;
	}): Promise<ResultType<User, EmailAlreadyInUse>> {
		try {
			const row = await this.transactions
				.currentDatabase()
				.insertInto('users')
				.values({
					id: randomUUIDv7(),
					name: params.fullName,
					email: params.email,
					password: params.passwordHash,
					created_at: new Date(),
					updated_at: null,
				})
				.returning(userColumns)
				.executeTakeFirstOrThrow();

			return Result.ok(this.#toUser(row));
		} catch (error) {
			if (
				error instanceof postgres.PostgresError &&
				error.code === '23505' &&
				error.constraint_name === 'users_email_unique'
			) {
				return Result.err(new EmailAlreadyInUse());
			}

			throw error;
		}
	}

	#toUser(row: {
		id: string;
		name: string | null;
		email: string;
		password: string;
		created_at: Date;
		updated_at: Date | null;
	}) {
		return new User({
			id: row.id,
			fullName: row.name,
			email: row.email,
			passwordHash: row.password,
			createdAt: row.created_at,
			updatedAt: row.updated_at,
		});
	}
}
