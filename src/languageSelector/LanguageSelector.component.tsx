import React, { ReactElement } from 'react'
import { View, Picker } from 'react-native'

export default class LanguageSelector extends React.Component<
    {},
    { language: string }
> {
    private constructor(props: Readonly<{}>) {
        super(props)
        this.state = { language: 'java' }
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
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}
