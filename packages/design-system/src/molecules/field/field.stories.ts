import { preview } from '../../../.storybook/preview';
import Field from './field.vue';

const meta = preview.meta({
	component: Field,
	title: 'Molecules/Field',
	argTypes: {
		label: { type: 'string' },
		errorMessage: { type: 'string' },
		helpMessage: { type: 'string' },
	},
});

export default meta;

export const Base = meta.story();
export const WithLabel = meta.story({ args: { label: 'Email address', type: 'email' } });
export const WithErrorMessage = meta.story({
	args: { label: 'Password', type: 'password', errorMessage: 'Invalid password.' },
});
export const WithHelpMessage = meta.story({
	args: { label: 'Password', type: 'password', helpMessage: 'Use at least 8 characters.' },
});
