import React, { ReactElement } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { LanguageSwitchDispatchProps } from './languageSwitch.model.props'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const languageSwitch: React.FC<LanguageSwitchDispatchProps> = (
    props: LanguageSwitchDispatchProps
): ReactElement => (
    <TouchableOpacity onPress={props.switchLanguage} style={styles.button}>
        <Ionicons name="md-repeat" size={50} color={'green'} />
    </TouchableOpacity>
)

export default languageSwitch
