import React, { ReactElement } from 'react'
import { View, Picker } from 'react-native'
import {
    LanguageSelectorStateProps,
    LanguageSelectorDispatchProps,
} from './languageSelector.model'
import { ALanguagesChange } from '../languages/languages.actions'
import { Language } from '../languages/languages.model'

const languageSelector: React.FC<
    LanguageSelectorStateProps & LanguageSelectorDispatchProps
> = (
    props: LanguageSelectorStateProps & LanguageSelectorDispatchProps
): ReactElement => (
    <View style={props.style}>
        <Picker
            selectedValue={props.selectedCode}
            style={{
                width: '100%',
                borderWidth: 1,
                borderColor: 'grey',
            }}
            onValueChange={(itemValue): ALanguagesChange =>
                props.changeLanguage(itemValue, props.selector)
            }
        >
            {props.languages.map(
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
export default languageSelector
