import { Languages, Language, ESelectors } from '../languages/languages.model'
import { LanguageSelector } from '../languages/languages.model'

const list = (
    stored: LanguageSelector,
    retrieved: Languages,
    selector: ESelectors
): Language[] =>
    Object.entries(retrieved).map(
        (obj): Language => ({
            code: obj['0'],
            ...obj['1'],
            selected: stored[
                selector === ESelectors.SOURCE ? 'source' : 'target'
            ].find(
                (language: Language): boolean =>
                    language.code === obj['0'] && language.selected
            )
                ? true
                : false,
        })
    )

export const initialise = (
    stored: LanguageSelector,
    retrieved: Languages
): LanguageSelector => ({
    source: list(stored, retrieved, ESelectors.SOURCE),
    target: list(stored, retrieved, ESelectors.TARGET),
})
