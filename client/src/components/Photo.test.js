import React from 'react'
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme';
import Photos from './Photos'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


describe('Photo component', () => {
  
  it('should render the Thumbnail parent component', () => {
    expect(shallow(<Photos />).find('#thumbs').exists()).toBe(true)
  })
  it('should render the Zoom parent component', () => {
    expect(shallow(<Photos />).find('#imageContainer').exists()).toBe(true)
  })

})