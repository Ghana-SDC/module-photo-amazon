import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Img = styled.img`
  width:480px;
  height: auto;
`
const Span = styled.span`
border:5px solid black;
width: 
`
const AltImages = styled.div`
    width: 40px;
    margin-left: -40px;
    float: left;
`
const ImagesMain = styled.div`
  position: relative;
  padding-left: 32px;
`
const imagesLeft = styled.div`
  position:relative;
  padding: 0;
`
const ImgList = styled.ul`

`
const ImgButtons = styled.li`

`
const ThumbImg = styled.img`
width:40px;
height:40px;
`

class Photos extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: false,
      images: [],
      main: ''
    }
  }
  componentDidMount() {
    axios.get('api/pictures/1')
     .then(res => {
       console.log('this is the response', res.data)
       this.setState({
         main: res.data[0].url
       })
    })
  }
  render() { 
    return ( 
      <ImagesMain>
    <Img src={this.state.main}></Img>
  <AltImages><ThumbImg src={this.state.main} /></AltImages>
      </ImagesMain>
     )
  }
}
 
export default Photos;