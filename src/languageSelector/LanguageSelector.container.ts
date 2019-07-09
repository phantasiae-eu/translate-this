import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
    languagesChange,
    ALanguagesChange,
} from '../languages/languages.actions'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { AppState } from '../store/store.model'
import LanguageSelector from './LanguageSelector.component'

const mapStateToProps = (state: AppState): LanguageSelectorStateProps => ({
    languages: state.languages,
})
const mapDispatchToProps = (
    dispatch: Dispatch
): LanguageSelectorDispatchProps => ({
    changeLanguage: (language: string): ALanguagesChange =>
        dispatch(languagesChange(language)),
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSelector)
