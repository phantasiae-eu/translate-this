import { Dispatch } from 'redux'
import { ALanguagesInitialise } from './languages.actions'

export interface LanguagesDispatchProps {
    languagesInitialise: () => ALanguagesInitialise
    dispatch: Dispatch
}

export interface Languages {
    [key: string]: { dir: string; name: string; nativeName: string }
}

export interface Language {
    code: string
    dir: string
    name: string
    nativeName: string
    selected: boolean
}

export enum ESelectors {
    SOURCE = 'SOURCE',
    TARGET = 'TARGET',
}

export interface LanguageSelector {
    source: Language[]
    target: Language[]
}

export const defaultLanguageSelector: LanguageSelector = {
    source: [],
    target: [],
}

interface ToScript {
    code: string
    dir: string
    name: string
    nativeName: string
}

interface Script extends ToScript {
    toScripts: ToScript[]
}

interface TransliterationRawInner {
    name: string
    nativeName: string
    scripts: Script[]
}

export interface Transliteration extends TransliterationRawInner {
    code: string
}

export interface TransliterationRaw {
    0: string
    1: TransliterationRawInner
}
