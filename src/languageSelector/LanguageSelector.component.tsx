import React, { ReactElement } from 'react'
import { View, Picker } from 'react-native'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { ALanguagesChange } from '../languages/languages.actions'
import { Language } from '../languages/languages.model'

export default class LanguageSelector extends React.Component<
    LanguageSelectorStateProps & LanguageSelectorDispatchProps
> {
    public constructor(
        props: Readonly<
            LanguageSelectorStateProps & LanguageSelectorDispatchProps
        >
    ) {
        super(props)
    }
    public render(): ReactElement {
        const selectedLanguage: Language[] = this.props.languages.filter(
            (obj): string => (obj.selected ? obj.code : null)
        )
        const selectedValue: string =
            selectedLanguage.length === 0 ? undefined : selectedLanguage[0].code
        return (
            <View style={this.props.style}>
                <Picker
                    selectedValue={selectedValue}
                    style={{
                        width: '100%',
                        borderWidth: 1,
                        borderColor: 'grey',
                    }}
                    onValueChange={(itemValue): ALanguagesChange =>
                        this.props.changeLanguage(
                            itemValue,
                            this.props.selector
                        )
                    }
                >
                    {this.props.languages.map(
                        (language: Language, i: number): ReactElement => (
                            <Picker.Item
                                key={i}
                                label={language.name}
                                value={language.code}
                            />
                        )
                    )}
                </Picker>
            </View>
        )
    }
}
