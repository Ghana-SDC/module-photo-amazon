import React, { Component } from 'react';
import ThumbRender from './ThumbRender.jsx';
import ReactImageMagnify from 'react-image-magnify';
import { AltImages, ImagesMain, ImagesLeft, ZoomContainer, ImageContainer, Popover, ImageGalMain, ImageGalThumb, Span} from './style.js'
import PropTypes from 'prop-types';

class Photos extends Component {
  constructor(props){
    super(props)
    this.state = {
      zoomed: false
    }
  }
  static defaultProps = {
    images: [],
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
      <ImagesMain id="imagesMain">
    <ImagesLeft>
  <AltImages id="thumbs">
      {this.props.images.map((img, index) => (
      <ThumbRender img={img} key={index} id={index} handleClick={this.props.handleClick} selected={this.props.selected} isSelected={this.props.isSelected}/>
      ))}
  </AltImages>
  </ImagesLeft>
    <ImageContainer id="imageContainer" onClick={this.props.handleModal} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver}>
    <ReactImageMagnify  id='zooms'{...{
      smallImage: {
        src: this.props.main,
        width: 320,
        height: 240,
        imageClassName: 'small'
      },
      largeImage: {
        src: this.props.main,
        width: 1024,
        height: 768
      },
      // enlargedImagePortalId: 'zoomframe',
      enlargedImagePosition: 'over',
      shouldUsePositiveSpaceLens: true
    }} /><Span>{zoom}</Span>
    </ImageContainer>
      </ImagesMain>
    )
  }
}
Photos.propTypes = {
  images: PropTypes.array,
  main: PropTypes.string,
  selected: PropTypes.array,
  isSelected: PropTypes.bool
}

export default Photos;