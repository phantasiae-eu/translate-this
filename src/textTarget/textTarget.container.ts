import { connect } from 'react-redux'
import TextTarget from './textTarget.component'
import { AppState } from '../store/store.model'
import { TextTargetStateProps } from './textTarget.model'

const mapStateToProps = (state: AppState): TextTargetStateProps => ({
    text: state.textTarget.text,
})

export default connect(
    mapStateToProps,
    null
)(TextTarget)
