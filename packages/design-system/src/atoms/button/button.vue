<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import { tv, type VariantProps } from 'tailwind-variants';
import { computed } from 'vue';

const {
	href,
	prefetch = false,
	disabled = false,
} = defineProps<{
	color?: ButtonProps['color'];
	href?: string;
	prefetch?: boolean;
	flat?: ButtonProps['flat'];
	size?: ButtonProps['size'];
	disabled?: boolean;
}>();

const button = tv({
	base: 'text-off-white inline-flex cursor-pointer items-center justify-center rounded-md border border-gray-800 bg-gray-900 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 disabled:pointer-events-none disabled:opacity-50',

	variants: {
		color: {
			cyan: 'border-cyan-700 bg-cyan-700 text-white hover:bg-cyan-800',
			violet: 'border-violet-700 bg-violet-700 text-white hover:bg-violet-800',
			red: 'border-red-700 bg-red-700 text-white hover:bg-red-800',
			yellow: 'border-yellow-600 bg-yellow-600 text-gray-900 hover:bg-yellow-700',
			lime: 'border-lime-700 bg-lime-700 text-white hover:bg-lime-800',
		},

		size: {
			extraSmall: 'h-8 px-3 text-xs',
			small: 'h-9 px-3',
			medium: 'h-10 px-4',
		},

		flat: {
			true: 'border-transparent bg-transparent text-gray-900 shadow-none hover:bg-gray-100',
			false: 'shadow-sm',
		},

		disabled: {
			true: 'cursor-not-allowed opacity-50',
			false: '',
		},
	},

	defaultVariants: {
		size: 'medium',
	},
});

type ButtonProps = VariantProps<typeof button>;

const buttonOrLink = computed(() => {
	return href ? Link : 'button';
});
</script>

<template>
	<Component
		v-bind="$attrs"
		:is="buttonOrLink"
		:class="
			button({
				color,
				size,
				flat,
				disabled,
			})
		"
		:href
		:prefetch
		:disabled
	>
		<slot />
	</Component>
</template>
