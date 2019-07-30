import { list } from '../languages'
import {
    LanguageSelector,
    Languages,
    ESelectors,
    Language,
} from '../../languages/languages.model'

describe('languages', (): void => {
    describe('list', (): void => {
        const setup = (): { result: Language[] } => {
            const stored: LanguageSelector = {
                source: [
                    {
                        code: 'ar',
                        dir: 'rtl',
                        name: 'Arabic',
                        nativeName: 'العربية',
                        selected: true,
                    },
                    {
                        code: 'af',
                        dir: 'ltr',
                        name: 'Afrikaans',
                        nativeName: 'Afrikaans',
                        selected: false,
                    },
                ],
                target: [
                    {
                        code: 'ar',
                        dir: 'rtl',
                        name: 'Arabic',
                        nativeName: 'العربية',
                        selected: false,
                    },
                    {
                        code: 'af',
                        dir: 'ltr',
                        name: 'Afrikaans',
                        nativeName: 'Afrikaans',
                        selected: true,
                    },
                ],
            }
            const retrieved: Languages = {
                af: {
                    dir: 'ltr',
                    name: 'Afrikaans',
                    nativeName: 'Afrikaans',
                },
                ar: {
                    dir: 'rtl',
                    name: 'Arabic',
                    nativeName: 'العربية',
                },
                bg: {
                    dir: 'ltr',
                    name: 'Bulgarian',
                    nativeName: 'Български',
                },
            }
            const selector: ESelectors = ESelectors.SOURCE
            const result: Language[] = list(stored, retrieved, selector)
            return { result }
        }
        it('should include a new language from the API in a list of already stored languages', (): void => {
            const espectedResult: Language[] = [
                {
                    code: 'af',
                    dir: 'ltr',
                    name: 'Afrikaans',
                    nativeName: 'Afrikaans',
                    selected: false,
                },
                {
                    code: 'ar',
                    dir: 'rtl',
                    name: 'Arabic',
                    nativeName: 'العربية',
                    selected: true,
                },
                {
                    code: 'bg',
                    dir: 'ltr',
                    name: 'Bulgarian',
                    nativeName: 'Български',
                    selected: false,
                },
            ]
            const { result } = setup()
            expect(result).toEqual(espectedResult)
        })
    })
})
