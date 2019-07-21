import React, { useEffect } from 'react'
import { LanguagesDispatchProps } from './languages.model'

const languages: React.FC<LanguagesDispatchProps> = (
    props: LanguagesDispatchProps
): null => {
    useEffect((): void => {
        props.languagesInitialise()
    })
    return null
}

export default languages
