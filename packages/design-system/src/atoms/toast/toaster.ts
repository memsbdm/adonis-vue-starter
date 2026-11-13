import { createToaster } from '@ark-ui/vue/toast';

export const toaster = createToaster({
	placement: 'top-end',
	overlap: true,
	gap: 12,
	duration: 5000,
});
