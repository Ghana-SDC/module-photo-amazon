import React, { Component } from 'react';
import Photos from './components/Photos.jsx';
import Modal from 'react-modal';
import axios from 'axios';
import { ImageGalMain, Close } from './components/style';
import ThumbRender from './components/ThumbRender.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      images: [],
      main: '',
      selected: [],
      isSelected: true
    }
  }
  componentDidMount() {
    axios.get('api/pictures/1')
    .then(res => {
      const pics = res.data[0].url.split(',')
      this.setState({
        main: pics[0],
        images: [...pics]
      })
    })
  }
  handleClick = (e) => {
      this.setState({
      main: e.target.src,
      selected: e.target,
      isSelected: false
    })
  }
  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }
  render() { 
    return (
      <div id="container">
      <Modal
      {...this.props}       
          isOpen={this.state.showModal}
          contentLabel="Photo Gallery"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="PhotoModal"
        >
          <ImageGalMain src={this.state.main} className="mainImage" />
          {this.state.images.map((img, index) => (
            <ThumbRender img={img} id={index} key={index} handleClick={this.handleClick} main={this.state.main} selected={this.state.main} isSelected={this.state.isSelected} showModal={this.state.showModal}/>
          ))}
          <Close onClick={this.handleCloseModal}>&#128473;</Close>
        </Modal>
      <Photos id="photoContainer" handleModal={this.handleOpenModal} main={this.state.main} images={this.state.images} selected={this.state.selected} isSelected={this.state.isSelected} handleClick={this.handleClick} showMo={this.state.showModal}/>
        </div>
    )
  }
}

export default App;