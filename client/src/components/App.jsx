import React, { Component } from "react";
import Photos from "./Photos.jsx";
import Modal from "react-modal";
import axios from "axios";
import { ImageGalMain, Close, ZoomContainer, Container } from "./style";
import ThumbRender from "./ThumbRender.jsx";
Modal.defaultStyles.overlay.right = "15%";
Modal.defaultStyles.overlay.left = "15%";
Modal.defaultStyles.overlay.top = "10%";
Modal.defaultStyles.overlay.bottom = "10%";
Modal.defaultStyles.content.overflow = "hidden";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      images: [],
      main: "",
      mainModal: "",
      selected: [],
      isSelected: true
    };
  }
  componentDidMount() {
    axios.get("api/pictures/1").then(res => {
      const pics = res.data[0].url.split(",");
      this.setState({
        main: pics[0],
        images: [...pics],
        mainModal: pics[0]
      });
    });
  }
  handleClick = e => {
    this.setState({
      main: e.target.src,
      selected: e.target,
      isSelected: false
    });
  };
  handleModalClick = e => {
    this.setState({
      mainModal: e.target.src,
      selected: e.target,
      isSelected: false
    });
  };
  handleOpenModal = () => {
    this.setState({
      showModal: true,
      mainModal: this.state.main
    });
  };
  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };
  render() {
    return (
      <Container id="container">
        <Modal
          {...this.props}
          isOpen={this.state.showModal}
          contentLabel="Photo Gallery"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="PhotoModal"
        >
          <ImageGalMain
            src={this.state.mainModal}
            className="mainImage"
          />
          {this.state.images.map((img, index) => (
            <ThumbRender
              img={img}
              id={index}
              key={index}
              handleClick={this.handleModalClick}
              main={
                this.state.mainModal ? this.state.mainModal : this.state.main
              }
              selected={this.state.selected}
              isSelected={this.state.isSelected}
              showModal={this.state.showModal}
            />
          ))}
          <Close onClick={this.handleCloseModal}>&#128473;</Close>
        </Modal>
        <Photos
          id="photoContainer"
          handleModal={this.handleOpenModal}
          main={this.state.main}
          images={this.state.images}
          selected={this.state.selected}
          isSelected={this.state.isSelected}
          handleClick={this.handleClick}
          showMo={this.state.showModal}
        />  
      </Container>
    );
  }
}

export default App;
