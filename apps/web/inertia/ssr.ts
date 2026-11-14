import { resolvePageComponent } from '@adonisjs/inertia/helpers';
import { TuyauProvider } from '@adonisjs/inertia/vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h, type DefineComponent } from 'vue';
import { client } from '~/client';
import { i18nConfig } from './18n';

export default function render(page: any) {
	return createInertiaApp({
		page,
		render: renderToString,
		resolve: (name) => {
			return resolvePageComponent(
				`./pages/${name}.vue`,
				import.meta.glob<DefineComponent>('./pages/**/*.vue', { eager: true }),
			);
		},
		setup: ({ App, props, plugin }) => {
			const locale = props.initialPage.props.locale;
			const i18n = i18nConfig(locale);

			return createSSRApp({
				render: () => h(TuyauProvider, { client }, { default: () => h(App, props) }),
			})
				.use(plugin)
				.use(i18n);
		},
	});
}
