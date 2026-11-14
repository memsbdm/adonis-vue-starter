import { createI18n } from 'vue-i18n';
import { resources } from '~/locales/resources';

export const i18nConfig = (locale: string) =>
	createI18n({
		legacy: false,
		locale,
		fallbackLocale: 'en',
		messages: resources,
	});
