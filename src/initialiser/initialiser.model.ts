import { Dispatch } from 'redux'
import { AInitialiseLanguage } from './initialiser.actions'

export interface InitialiserDispatchProps {
    initialiseLanguages: () => AInitialiseLanguage
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
