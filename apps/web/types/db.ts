import type { Generated } from 'kysely';

export interface Users {
	id: string;
	name: string | null;
	email: string;
	password: string;
	created_at: Generated<Date>;
	updated_at: Date | null;
}

export interface DB {
	users: Users;
}
