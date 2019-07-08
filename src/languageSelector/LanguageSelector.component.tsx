import React, { ReactElement } from 'react'
import { View, Picker } from 'react-native'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { ALanguageSelectorChange } from './languageSelector.actions'
import { Language } from '../initialiser/initialiser.model'

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
        const selectedLanguage: Language[] = this.props.languages.filter(
            (obj): string => (obj.selected ? obj.code : null)
        )
        const selectedValue: string =
            selectedLanguage.length === 0 ? undefined : selectedLanguage[0].code
        return (
            <View>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue): ALanguageSelectorChange =>
                        this.props.changeLanguage(itemValue)
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
