import TextSourceTransliterated from './textSourceTransliterated.component'
import { connect } from 'react-redux'
import { AppState } from '../store/store.model'
import { TextSourceTransliteratedStateProps } from './textSourceTransliterated.model'

const mapStateToProps = (
    state: AppState
): TextSourceTransliteratedStateProps => ({
    text: state.textSourceTransliterated.text,
})

export default connect(
    mapStateToProps,
    null
)(TextSourceTransliterated)
