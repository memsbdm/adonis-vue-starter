export interface UserProperties {
	id: string;
	fullName: string | null;
	email: string;
	passwordHash: string;
	createdAt: Date;
	updatedAt: Date | null;
}

export default class User {
	constructor(private readonly props: UserProperties) {}

	get id() {
		return this.props.id;
	}

	get fullName() {
		return this.props.fullName;
	}

	get email() {
		return this.props.email;
	}

	get passwordHash() {
		return this.props.passwordHash;
	}

	get createdAt() {
		return this.props.createdAt;
	}

	get updatedAt() {
		return this.props.updatedAt;
	}
}
