import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Photos from '../Photos';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })


describe('Photo component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Photos />)
  });
  
  it('should render the Thumbnail parent component', () => {
    shallow(<Photos />).setProps({images: ['test','ing']})
  expect(shallow(<Photos />).find('#imagesMain').exists()).toBe(true)
  })

})