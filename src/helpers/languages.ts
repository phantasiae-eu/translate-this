import { Languages, Language, ESelectors } from '../languages/languages.model'
import { LanguageSelector } from '../languages/languages.model'

const list = (
    stored: LanguageSelector,
    retrieved: Languages,
    selector: ESelectors
): Language[] => {
    const languages: Language[] = Object.entries(retrieved).map(
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
    return languages.some((language: Language): boolean => !!language.selected)
        ? languages
        : languages.map(
              (language: Language, i: number): Language =>
                  i === 0 ? { ...language, selected: true } : language
          )
}

export const initialise = (
    stored: LanguageSelector,
    retrieved: Languages
): LanguageSelector => ({
    source: list(stored, retrieved, ESelectors.SOURCE),
    target: list(stored, retrieved, ESelectors.TARGET),
})
