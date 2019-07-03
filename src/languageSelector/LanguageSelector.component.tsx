import React, { ReactElement, Dispatch } from 'react'
import { View, Picker } from 'react-native'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { ALanguageSelectorChange } from './languageSelector.actions'

export default class LanguageSelector extends React.Component<
    LanguageSelectorStateProps & LanguageSelectorDispatchProps
> {
    private languages: string[] = ['Italian', 'English', 'Chinese']
    public constructor(
        props: Readonly<
            LanguageSelectorStateProps & LanguageSelectorDispatchProps
        >
    ) {
        super(props)
    }
    public render(): ReactElement {
        return (
            <View>
                <Picker
                    selectedValue={this.props.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue): ALanguageSelectorChange =>
                        this.props.changeLanguage(itemValue)
                    }
                >
                    {this.languages.map(
                        (language: string, i: number): ReactElement => (
                            <Picker.Item
                                key={i}
                                label={language}
                                value={language}
                            />
                        )
                    )}
                </Picker>
            </View>
        )
    }
}
