import { TaggedError } from 'better-result';

export class EmailAlreadyInUse extends TaggedError('EmailAlreadyInUse')<{}> {}
