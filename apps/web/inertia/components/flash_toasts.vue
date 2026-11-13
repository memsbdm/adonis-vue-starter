<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { toaster, Toaster } from '@starter/design-system/toaster';
import { watch } from 'vue';

const page = usePage();

watch(
	() => page.url,
	() => toaster.dismiss('flash'),
);

watch(
	() => page.flash,
	(flash) => {
		if (flash.error) {
			toaster.create({ id: 'flash', title: flash.error, type: 'error' });
		}

		if (flash.success) {
			toaster.create({ id: 'flash', title: flash.success, type: 'success' });
		}
	},
	{ immediate: true },
);
</script>

<template>
	<Toaster />
</template>
