<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue';
import { useForm, usePage } from '@inertiajs/vue3';
import AlertNote from '@starter/design-system/alert-note';
import Button from '@starter/design-system/button';
import Field from '@starter/design-system/field';
import { useI18n } from 'vue-i18n';
import AppLayout from '~/layouts/app.vue';

const page = usePage();
const { t } = useI18n();
const form = useForm({ fullName: '', email: '', password: '', passwordConfirmation: '' });
</script>

<template>
	<AppLayout>
		<main class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-6 py-12">
			<section class="w-full space-y-6">
				<div class="space-y-2">
					<h1 class="text-2xl font-semibold tracking-tight">{{ t('auth.registerTitle') }}</h1>
					<p class="text-sm text-gray-600">{{ t('auth.registerDescription') }}</p>
				</div>

				<form class="space-y-4" @submit.prevent="form.post('/register')">
					<AlertNote v-if="page.flash.error">{{ page.flash.error }}</AlertNote>
					<Field
						v-model="form.fullName"
						:label="t('auth.fullName')"
						autocomplete="name"
						required
						:error-message="form.errors.fullName"
					/>
					<Field
						v-model="form.email"
						:label="t('auth.emailAddress')"
						type="email"
						autocomplete="email"
						required
						:error-message="form.errors.email"
					/>
					<Field
						v-model="form.password"
						:label="t('auth.password')"
						type="password"
						autocomplete="new-password"
						required
						:error-message="form.errors.password"
					/>
					<Field
						v-model="form.passwordConfirmation"
						:label="t('auth.confirmPassword')"
						type="password"
						autocomplete="new-password"
						required
						:error-message="form.errors.passwordConfirmation"
					/>

					<Button type="submit" class="w-full" :disabled="form.processing">{{ t('common.createAccount') }}</Button>
				</form>

				<p class="text-sm text-gray-600">
					{{ t('auth.haveAccount') }}
					<Link route="login.render" class="font-medium text-gray-900 underline">{{ t('common.logIn') }}</Link>
				</p>
			</section>
		</main>
	</AppLayout>
</template>
