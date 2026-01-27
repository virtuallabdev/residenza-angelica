import { it } from './i18n/it';
import { en } from './i18n/en';
import { de } from './i18n/de';

export type Language = 'it' | 'en' | 'de';

export const translations = {
	it,
	en,
	de
};

export function t(lang: Language, key: string): string {
	const keys = key.split('.');
	let value: any = translations[lang];

	for (const k of keys) {
		value = value?.[k];
	}

	return value || key;
}
