import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import ThumbRender from '../ThumbRender.jsx';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() })


describe('Thumbnail component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ThumbRender />)
  });

  it('should render the first thumbnail', () => {
    wrapper.setProps({ id: 0 });
    expect(wrapper.find('.thumb').exists()).toBe(true);
  
  })
  it('should render other thumbnails', () => {
    wrapper.setProps({ id: 1 });
    expect(wrapper.find('.thumbs').exists()).toBe(true);
  })
  // it('should handle changing thumbnails on the main photogallery', () => {
  //   const wrapper = mount(<ThumbRender />)
  //   wrapper.setProps({id: 1, showModal: false});
  //   wrapper.find('.thumbs').simulate('click');
  //   expect(wrapper.find('.thumbs').get(0).props.style).toHaveProperty('border', '.8px solid #e56f14')
  // })
  // it('should see css', () => {
  //   wrapper.setProps({id: 0});
  //   expect(wrapper.find('.thumb').get(0).props.style).toHaveProperty('border', '.8px solid black')
  // })

})