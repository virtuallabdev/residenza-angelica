import en from './en';
import it from './it';
import de from './de';

export const translations = {
    en,
    it,
    de
} as const;

export type LanguageCode = keyof typeof translations;
export type TranslationSchema = typeof en;

export interface Language {
    code: LanguageCode;
    name: string;
}

export const languages: Language[] = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' }
];