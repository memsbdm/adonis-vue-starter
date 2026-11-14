<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue';
import { router, usePage } from '@inertiajs/vue3';
import FlashToasts from '~/components/flash_toasts.vue';

const page = usePage();
</script>

<template>
	<div class="min-h-screen">
		<header class="border-b border-gray-200">
			<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
				<Link route="home" class="text-lg font-semibold text-gray-900">Starter</Link>
				<nav class="flex items-center gap-4 text-sm">
					<template v-if="page.props.user">
						<span class="text-gray-600">{{ page.props.user.fullName }}</span>
						<form @submit.prevent="router.post('/logout')">
							<button type="submit" class="font-medium text-gray-900 underline">Log out</button>
						</form>
					</template>
					<template v-else>
						<Link route="login.render" class="font-medium text-gray-900">Log in</Link>
						<Link route="register.render" class="font-medium text-gray-900">Create account</Link>
					</template>
				</nav>
			</div>
		</header>
		<slot />
		<FlashToasts />
	</div>
</template>
