import { h } from 'vue';
import { preview } from '../../../.storybook/preview';
import Button from '../button/button.vue';
import { toaster } from './toaster';
import Toaster from './toaster.vue';

const meta = preview.meta({
	component: Toaster,
	title: 'Atoms/Toast',
});

export default meta;

export const Base = meta.story({
	render: (args) =>
		h('div', { class: 'flex items-center gap-3' }, [
			h(
				Button,
				{ onClick: () => toaster.create({ title: 'Hello', description: 'World' }) },
				{ default: () => 'Create toast' },
			),
			h(Toaster, args),
		]),
});
