import { Dispatch } from 'redux'
import { AInitialiseLanguage } from './initialiser.actions'

export interface InitialiserDispatchProps {
    initialiseLanguages: () => AInitialiseLanguage
    dispatch: Dispatch
}
