import React, { ReactElement } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { LanguageSwitchDispatchProps } from './languageSwitch.model.props'
import { Ionicons } from '@expo/vector-icons'

export default class LanguageSwitch extends React.Component<
    LanguageSwitchDispatchProps
> {
    private styles = StyleSheet.create({
        button: {
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
    public constructor(props: LanguageSwitchDispatchProps) {
        super(props)
    }
    public render(): ReactElement {
        return (
            <TouchableOpacity
                onPress={this.props.switchLanguage}
                style={this.styles.button}
            >
                <Ionicons name="md-repeat" size={50} color={'green'} />
            </TouchableOpacity>
        )
    }
}
