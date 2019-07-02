import React, { ReactElement } from 'react'
import { View, Picker } from 'react-native'

export default class LanguageSelector extends React.Component<
    {},
    { language: string }
> {
    private languages: string[] = ['Italian', 'English', 'Chinese']
    private constructor(props: Readonly<{}>) {
        super(props)
        this.state = { language: 'Italian' }
    }
    public render(): ReactElement {
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue): void =>
                        this.setState({ language: itemValue })
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
