import React from "react";
import Enzyme from "enzyme";
import { shallow, mount, render } from "enzyme";
import { findDOMNode } from "react-dom";
import App from "../../components/App";
import Adapter from "enzyme-adapter-react-16";
import ReactModal from "react-modal";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  // it('should render the Photo component', () => {
  //   expect(shallow(<App />).find('#container').exists()).toBe(true)
  // })

  it("modal should exist", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    expect(wrapper.find(".PhotoModal").exists()).toEqual(true);
  });
  it("should render the container for its child components", () => {
    const wrapper = mount(
      <div id="root">
        <App />
      </div>
    );
    expect(wrapper.find("#container").exists()).toEqual(true);
  });
  it("renders the modal", () => {
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
});
