import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PhotoZoom from './PhotoZoom.jsx'
import Thumbnails from './Thumbnails.jsx'

const AltImages = styled.div`
    width: 40px;
    margin-left: 0px;
    float: left;
    
`
const ImagesMain = styled.div`
  position: relative;
  overflow: auto;
`
const ImagesLeft = styled.div`
  ${'' /* padding: 32px; */}
`
class Photos extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: [],
      main: '',
      selected: []
    }
    this.handleClick = this.handleClick.bind(this);
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
  handleClick(e) {
      this.setState({
      main: e.target.src,
      selected: e.target
    })
  }
  render() {
    return ( 
      <ImagesMain>
    <ImagesLeft>
  <AltImages>
      {this.state.images.map((img, index) => (
      <Thumbnails img={img} key={index} id={index} handleClick={this.handleClick} selected={this.state.selected}/>
      ))}
  </AltImages>
  </ImagesLeft>
    <PhotoZoom main={this.state.main}/>
      </ImagesMain>
    )
  }
}

export default Photos;