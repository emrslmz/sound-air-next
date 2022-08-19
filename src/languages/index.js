import enEn from './en-EN.json';
import trTR from './tr-TR.json';
import { createI18n } from 'vue-i18n'

export default new createI18n({
    locale: localStorage.getItem('lang') || 'tr',
    messages: {
        tr: trTR,
        en: enEn,
    },
    fallbackLocale: 'tr',
    silentTranslationWarn: true,
});
