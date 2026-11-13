<script setup lang="ts">
import { ToastCloseTrigger, ToastDescription, ToastRoot, ToastTitle, Toaster as ArkToaster } from '@ark-ui/vue/toast';
import { tv } from 'tailwind-variants';
import { toaster } from './toaster';

const toastClasses = tv({
	base: 'bg-off-white w-80 rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-900 shadow-lg',
});
</script>

<template>
	<ArkToaster v-slot="toast" :toaster="toaster" label="Notifications">
		<ToastRoot :key="toast.id" :class="[toastClasses(), $style.root]">
			<div class="flex items-start justify-between gap-4">
				<div class="space-y-1">
					<ToastTitle class="font-medium">{{ toast.title }}</ToastTitle>
					<ToastDescription v-if="toast.description" class="text-gray-600">
						{{ toast.description }}
					</ToastDescription>
				</div>
				<ToastCloseTrigger class="text-gray-500 hover:text-gray-900" aria-label="Close">×</ToastCloseTrigger>
			</div>
		</ToastRoot>
	</ArkToaster>
</template>

<style module>
.root {
	height: var(--height);
	opacity: var(--opacity);
	scale: var(--scale);
	transition-duration: 200ms;
	transition-property: translate, scale, opacity, height;
	translate: var(--x) var(--y) 0;
	will-change: translate, scale, opacity, height;
	z-index: var(--z-index);
}
</style>
