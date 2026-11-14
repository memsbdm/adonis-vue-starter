<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue';
import { useForm } from '@inertiajs/vue3';
import Button from '@starter/design-system/button';
import AppLayout from '~/layouts/app.vue';

const form = useForm({ email: '', password: '' });
</script>

<template>
	<AppLayout>
		<main class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-6 py-12">
			<section class="w-full space-y-6">
				<div class="space-y-2">
					<h1 class="text-2xl font-semibold tracking-tight">Log in</h1>
					<p class="text-sm text-gray-600">Log in to your account.</p>
				</div>

				<form class="space-y-4" @submit.prevent="form.post('/login')">
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
							autocomplete="current-password"
							type="password"
							required
							class="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-gray-900"
						/>
						<span v-if="form.errors.password" class="block text-xs text-red-600">{{ form.errors.password }}</span>
					</label>

					<Button type="submit" class="w-full" :disabled="form.processing">Log in</Button>
				</form>

				<p class="text-sm text-gray-600">
					Don't have an account?
					<Link route="register.render" class="font-medium text-gray-900 underline">Create an account</Link>
				</p>
			</section>
		</main>
	</AppLayout>
</template>
