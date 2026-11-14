<script setup lang="ts">
import { tv } from 'tailwind-variants';
import Icon from '../../atoms/icon/icon.vue';

const { type = 'danger' } = defineProps<{
	type?: 'info' | 'success' | 'warning' | 'danger';
}>();

const iconName = {
	info: 'info',
	success: 'success',
	warning: 'danger',
	danger: 'close-large',
} as const;

const alert = tv({
	base: 'flex items-start gap-2 rounded-md border px-3 py-2 text-sm',
	variants: {
		type: {
			info: 'border-blue-200 bg-blue-50 text-blue-900',
			success: 'border-green-200 bg-green-50 text-green-900',
			warning: 'border-yellow-200 bg-yellow-50 text-yellow-900',
			danger: 'border-red-200 bg-red-50 text-red-900',
		},
	},
});
</script>

<template>
	<div :class="alert({ type })" role="alert">
		<div class="size-[20px] shrink-0 pt-[2px]">
			<Icon :name="iconName[type]" />
		</div>
		<div class="min-w-0 flex-1"><slot /></div>
	</div>
</template>
