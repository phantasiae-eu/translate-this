import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
    changeLanguage,
    ALanguageSelectorChange,
} from './languageSelector.actions'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { AppState } from '../store/store.model'
import LanguageSelector from './LanguageSelector.component'

const mapStateToProps = (state: AppState): LanguageSelectorStateProps => ({
    language: state.languageSelector.language,
    languages: state.initialiser,
})
const mapDispatchToProps = (
    dispatch: Dispatch
): LanguageSelectorDispatchProps => ({
    changeLanguage: (language: string): ALanguageSelectorChange =>
        dispatch(changeLanguage(language)),
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSelector)
