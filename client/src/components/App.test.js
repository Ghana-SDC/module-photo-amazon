import React from 'react'
import Enzyme from 'enzyme'
import { shallow, mount, render } from 'enzyme';
import App from '../App.jsx'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


describe('App component', () => {
  
  it('should render the Photo component', () => {
    expect(shallow(<App />).find('#photoContainer').exists()).toBe(true)
  })

})