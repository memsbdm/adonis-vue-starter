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
					<span class="pc-status mono tag" :style="{ color: '#c0392b' }"> <span class="dot" /> 500 </span>
				</div>
				<div class="pc-lead">
					<span>{{ t('errors.serverTitle') }}</span>
					<em>{{ t('errors.serverDescription') }}</em>
				</div>
				<p class="pc-para">
					{{ t('errors.serverHelp') }}
				</p>
			</article>
		</div>
	</AppLayout>
</template>
