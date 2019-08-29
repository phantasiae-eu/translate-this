import React, { ReactElement } from 'react'
import { TextInput } from 'react-native'
import {
    TextSourceStateProps,
    TextSourceDispatchProps,
} from './textSource.model'
import { AChangeTextSource } from './textSource.actions'

const textSource: React.FC<TextSourceStateProps & TextSourceDispatchProps> = (
    props: TextSourceStateProps & TextSourceDispatchProps
): ReactElement => (
    <TextInput
        style={props.style}
        onChangeText={(text: string): AChangeTextSource =>
            props.changeText(text)
        }
        value={props.text}
    />
)
export default textSource
