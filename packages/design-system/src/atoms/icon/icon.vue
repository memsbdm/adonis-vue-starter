<script setup lang="ts">
defineProps<{
	name: 'close-large' | 'danger' | 'info' | 'success';
}>();
</script>

<template>
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<use :href="`#${name}`" />
		<symbol id="close-large">
			<path d="M16 4L4 16M4 4L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</symbol>
		<symbol id="danger">
			<path
				d="M9.13 3.52a1 1 0 0 1 1.74 0l6.28 10.98a1 1 0 0 1-.87 1.5H3.72a1 1 0 0 1-.87-1.5L9.13 3.52Z"
				stroke="currentColor"
				stroke-width="2"
			/>
			<path d="M10 8v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			<circle cx="10" cy="13" r="1" fill="currentColor" />
		</symbol>
		<symbol id="info">
			<circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2" />
			<path d="M10 9v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			<circle cx="10" cy="6.5" r="1" fill="currentColor" />
		</symbol>
		<symbol id="success">
			<path
				d="m6.5 10 2.2 2.2L13.5 7"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</symbol>
	</svg>
</template>
