export const LANGUAGE_SELECTOR_CHANGE = 'LANGUAGE_SELECTOR_CHANGE'

export interface ALanguageSelectorChange {
    type: typeof LANGUAGE_SELECTOR_CHANGE
    language: string
}
