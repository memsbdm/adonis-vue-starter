import './css/reset.css';
import { resolvePageComponent } from '@adonisjs/inertia/helpers';
import { TuyauProvider } from '@adonisjs/inertia/vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, type DefineComponent, h } from 'vue';
import { client } from '~/client';
import { i18nConfig } from './18n';

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS';

createInertiaApp({
	title: (title) => (title ? `${title} - ${appName}` : appName),
	resolve: (name) => {
		return resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'));
	},
	setup({ el, App, props, plugin }) {
		const locale = props.initialPage.props.locale;
		const i18n = i18nConfig(locale);
		createApp({ render: () => h(TuyauProvider, { client }, { default: () => h(App, props) }) })
			.use(plugin)
			.use(i18n)
			.mount(el);
	},
	progress: {
		color: '#4B5563',
	},
});
