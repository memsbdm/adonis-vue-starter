<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue';
import { useForm } from '@inertiajs/vue3';
import Button from '@starter/design-system/button';
import AppLayout from '~/layouts/app.vue';

const form = useForm({ fullName: '', email: '', password: '', passwordConfirmation: '' });
</script>

<template>
	<AppLayout>
		<main class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-6 py-12">
			<section class="w-full space-y-6">
				<div class="space-y-2">
					<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
					<p class="text-sm text-gray-600">Sign up to get started.</p>
				</div>

				<form class="space-y-4" @submit.prevent="form.post('/register')">
					<label class="block space-y-1.5 text-sm font-medium">
						<span>Full name</span>
						<input
							v-model="form.fullName"
							autocomplete="name"
							type="text"
							required
							class="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-900"
						/>
						<span v-if="form.errors.fullName" class="block text-xs text-red-600">{{ form.errors.fullName }}</span>
					</label>

					<label class="block space-y-1.5 text-sm font-medium">
						<span>Email address</span>
						<input
							v-model="form.email"
							autocomplete="email"
							type="email"
							required
							class="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-900"
						/>
						<span v-if="form.errors.email" class="block text-xs text-red-600">{{ form.errors.email }}</span>
					</label>

					<label class="block space-y-1.5 text-sm font-medium">
						<span>Password</span>
						<input
							v-model="form.password"
							autocomplete="new-password"
							type="password"
							required
							class="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-900"
						/>
						<span v-if="form.errors.password" class="block text-xs text-red-600">{{ form.errors.password }}</span>
					</label>

					<label class="block space-y-1.5 text-sm font-medium">
						<span>Confirm password</span>
						<input
							v-model="form.passwordConfirmation"
							autocomplete="new-password"
							type="password"
							required
							class="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-900"
						/>
						<span v-if="form.errors.passwordConfirmation" class="block text-xs text-red-600">{{
							form.errors.passwordConfirmation
						}}</span>
					</label>

					<Button type="submit" class="w-full" :disabled="form.processing">Create account</Button>
				</form>

				<p class="text-sm text-gray-600">
					Already have an account? <Link route="login.render" class="font-medium text-gray-900 underline">Log in</Link>
				</p>
			</section>
		</main>
	</AppLayout>
</template>
