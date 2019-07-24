import TextTargetTransliterated from './textTargetTransliterated.component'
import { connect } from 'react-redux'
import { AppState } from '../store/store.model'
import { TextTargetTransliteratedStateProps } from './textTargetTransliterated.model'

const mapStateToProps = (
    state: AppState
): TextTargetTransliteratedStateProps => ({
    text: state.textTargetTransliterated.text,
})

export default connect(
    mapStateToProps,
    null
)(TextTargetTransliterated)
