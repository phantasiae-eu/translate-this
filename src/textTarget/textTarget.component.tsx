import React, { ReactElement } from 'react'
import { TextTargetStateProps } from './textTarget.model'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
    },
})

export default class TextTarget extends React.Component<TextTargetStateProps> {
    public constructor(props: Readonly<TextTargetStateProps>) {
        super(props)
    }
    public render(): ReactElement {
        return <Text style={styles.text}>{this.props.text}</Text>
    }
}
