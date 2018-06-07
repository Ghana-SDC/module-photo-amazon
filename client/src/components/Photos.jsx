import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PhotoZoom from './PhotoZoom.jsx';
import ThumbRender from './ThumbRender.jsx';
import ReactImageMagnify from 'react-image-magnify';
import { AltImages, ImagesMain, ImagesLeft, ZoomContainer, ImageContainer, Popover, ImageGalMain, ImageGalThumb} from './style.js'


class Photos extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: [],
      main: '',
      selected: [],
      isSelected: true,
      pop: false
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
  gallery = (e) => {
    console.log('click registered', e.target)
    this.setState({
      pop: !this.state.pop
    })
  }
  render() {
    if(this.state.pop) {
      return (
      <Popover>
        <ImageGalMain src={this.state.main}/>
        <ImageGalThumb>
      {this.state.images.map((img, index) => (
        <ThumbRender img={img} key={index} id={index} handleClick={this.handleClick} selected={this.state.selected} isSelected={this.state.isSelected}/>
      ))}
      </ImageGalThumb>
        </Popover>
        )
    }
    return ( 
      <ImagesMain>
    <ImagesLeft>
  <AltImages>
      {this.state.images.map((img, index) => (
      <ThumbRender img={img} key={index} id={index} handleClick={this.handleClick} selected={this.state.selected} isSelected={this.state.isSelected}/>
      ))}
  </AltImages>
  </ImagesLeft>
    {/* <PhotoZoom main={this.state.main} images={this.state.images} onClick={this.gallery}/> */}
    <ImageContainer onClick={this.gallery}>
    <ReactImageMagnify {...{
      smallImage: {
        src: this.state.main,
        width: 400,
        height: 260
      },
      largeImage: {
        src: this.state.main,
        width: 1024,
        height: 768
      },
      // enlargedImagePortalId: 'zoom',
      shouldUsePositiveSpaceLens: true
    }} />
    <ZoomContainer id='zoom'></ZoomContainer>
    </ImageContainer>
      </ImagesMain>
    )
  }
}

export default Photos;