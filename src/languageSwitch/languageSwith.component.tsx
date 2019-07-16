import React, { ReactElement } from 'react'
import { Button } from 'react-native'
import { LanguageSwitchDispatchProps } from './languageSwitch.model.props'

export default class LanguageSwitch extends React.Component<
    LanguageSwitchDispatchProps
> {
    public constructor(props: LanguageSwitchDispatchProps) {
        super(props)
    }
    public render(): ReactElement {
        return <Button title={'switch'} onPress={this.props.switchLanguage} />
    }
}
