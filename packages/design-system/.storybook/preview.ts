import '../src/css/reset.css';
import { definePreview } from '@storybook/vue3-vite';

export const preview = definePreview({
	addons: [],
	parameters: {
		layout: 'centered',
	},
});

export default preview;
