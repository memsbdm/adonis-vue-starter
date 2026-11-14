import { BaseCheck, Result } from '@adonisjs/core/health';
import { sql } from 'kysely';
import { db } from '#core/services/db';

export default class DatabaseCheck extends BaseCheck {
	name = 'Database connection check';

	async run() {
		try {
			await sql`SELECT 1`.execute(db);

			return Result.ok('Successfully connected to the database');
		} catch {
			return Result.failed('Failed to connect to the database');
		}
	}
}
