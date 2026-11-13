<script setup lang="ts">
import FlashToasts from '~/components/flash_toasts.vue';
</script>

<template>
	<div class="min-h-screen">
		<header class="border-b border-gray-200">
			<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
				<a href="/" class="text-lg font-semibold text-gray-900">Starter</a>
			</div>
		</header>
		<slot />
		<FlashToasts />
	</div>
</template>
