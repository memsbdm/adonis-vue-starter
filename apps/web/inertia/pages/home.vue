<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppLayout from '~/layouts/app.vue';

const { t } = useI18n();
</script>

<template>
	<AppLayout>
		<main class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center px-6 py-16 text-center">
			<section class="max-w-2xl space-y-4">
				<h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
					AdonisJS <span class="text-gray-400">×</span> Inertia <span class="text-gray-400">×</span> Vue
				</h1>
				<p class="text-lg leading-8 text-gray-600">{{ t('home.description') }}</p>
			</section>
		</main>
	</AppLayout>
</template>
