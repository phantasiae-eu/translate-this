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

const textTarget: React.FC<TextTargetStateProps> = (
    props: TextTargetStateProps
): ReactElement => (
    <Text selectable style={styles.text}>
        {props.text}
    </Text>
)

export default textTarget
