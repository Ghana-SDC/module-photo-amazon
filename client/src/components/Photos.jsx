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
      zoomed: false
    }
  }
  handleMouseOver = () => {
    this.setState({
      zoomed: !this.state.zoomed
    })
  }
  render() {
    const zoom = this.state.zoomed
    ? "Click image to open expanded view"
    : "Roll over image to zoom in";
    return ( 
      <ImagesMain>
    <ImagesLeft>
  <AltImages id="thumbs">
      {this.props.images.map((img, index) => (
      <ThumbRender img={img} key={index} id={index} handleClick={this.props.handleClick} selected={this.props.selected} isSelected={this.props.isSelected}/>
      ))}
  </AltImages>
  </ImagesLeft>
    <ImageContainer id="imageContainer" onClick={this.props.handleModal} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver}>
    <ReactImageMagnify  {...{
      smallImage: {
        src: this.props.main,
        width: 400,
        height: 260
      },
      largeImage: {
        src: this.props.main,
        width: 1024,
        height: 768
      },
      // enlargedImagePortalId: 'zoom',
      shouldUsePositiveSpaceLens: true
    }} />{zoom}
    <ZoomContainer id='zoom'></ZoomContainer>
    </ImageContainer>
      </ImagesMain>
    )
  }
}

export default Photos;