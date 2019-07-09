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
