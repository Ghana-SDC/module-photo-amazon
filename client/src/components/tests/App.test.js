import React from "react";
import Enzyme from "enzyme";
import { shallow, mount, render } from "enzyme";
import { findDOMNode } from "react-dom";
import App from "../../components/App";
import Adapter from "enzyme-adapter-react-16";
import ReactModal from "react-modal";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {

  it("modal should exist", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    expect(wrapper.find(".PhotoModal").exists()).toEqual(true);
  });
  it("the container for its child components should exist", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    expect(wrapper.find("#container").exists()).toEqual(true);
  });
  it("finds the modal", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ReactModal).length).toEqual(1);
  });
  it("should open modal when image is clicked", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    wrapper.find("#zooms").simulate("click");
    expect(wrapper.find(ReactModal).prop("isOpen")).toEqual(true);
  });
  it("should set state", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    wrapper.setProps({isSelectedMod: true, showModal: false, main: 'test', images:['test'], mainModal: 'test', selected: ['test'], isSelected: true, selectedMod: 'test'})
    expect(wrapper.props().showModal).toBe(false);
    expect(wrapper.props().images).toEqual(['test']);
    expect(wrapper.props().main).toEqual('test');
    expect(wrapper.props().mainModal).toEqual('test');
    expect(wrapper.props().selected).toEqual(['test']);
    expect(wrapper.props().isSelected).toBe(true);
    expect(wrapper.props().isSelectedMod).toBe(true);
    expect(wrapper.props().selectedMod).toEqual('test');
  })
});
