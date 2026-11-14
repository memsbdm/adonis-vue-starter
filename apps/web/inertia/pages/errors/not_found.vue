<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppLayout from '~/layouts/app.vue';

const { t } = useI18n();
</script>

<template>
	<AppLayout>
		<div class="home">
			<article class="prose-card">
				<div class="pc-top">
					<span class="pc-status mono tag" :style="{ color: 'var(--subtle)' }"> <span class="dot" /> 404 </span>
				</div>
				<div class="pc-lead">
					<span>{{ t('errors.notFoundTitle') }}</span>
					<em>{{ t('errors.notFoundDescription') }}</em>
				</div>
				<p class="pc-para">{{ t('errors.notFoundHelp') }}</p>
			</article>
		</div>
	</AppLayout>
</template>
