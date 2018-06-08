import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import ThumbRender from './ThumbRender.jsx';
import Adapter from 'enzyme-adapter-react-16';
import styled from 'styled-components';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() })


describe('Thumbnail component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ThumbRender />)
  });

  it('should render the first thumbnail', () => {
    wrapper.setProps({ id: 0 });
    // wrapper.update(); 
    // console.log(wrapper.debug());
    // console.log(wrapper.html()); 
      expect(wrapper.find('.thumb').exists()).toBe(true);
  
  })
  it('should render other thumbnails', () => {
    wrapper.setProps({ id: 1 });
    expect(wrapper.find('.thumbs').exists()).toBe(true);
  })

})