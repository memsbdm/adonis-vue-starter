import { TaggedError } from 'better-result';

export class InvalidCredentials extends TaggedError('InvalidCredentials')<{}> {}
