import { connect } from 'react-redux'
import TextSource from './textSource.component'
import { AppState } from '../store/store.model'
import {
    TextSourceStateProps,
    TextSourceDispatchProps,
} from './textSource.model'
import { Dispatch } from 'redux'
import { AChangeTextSource, changeTextSource } from './textSource.actions'

const mapStateToProps = (state: AppState): TextSourceStateProps => ({
    text: state.textSource.text,
})

const mapDispatchToProps = (dispatch: Dispatch): TextSourceDispatchProps => ({
    changeText: (text: string): AChangeTextSource =>
        dispatch(changeTextSource(text)),
    dispatch,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextSource)
