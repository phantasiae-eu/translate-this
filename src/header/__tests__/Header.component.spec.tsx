import React from 'react'
import Header from '../Header.component'

import renderer from 'react-test-renderer'

describe('Header.component', (): void => {
    it('should correctly render the header', (): void => {
        const tree = renderer.create(<Header />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
