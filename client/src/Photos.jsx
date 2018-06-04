import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Img = styled.img`
  width:480px;
  height: auto;
  padding-left: .3%
`

const AltImages = styled.div`
    width: 40px;
    margin-left: 0px;
    float: left;
    
`
const ImagesMain = styled.div`
  position: relative;
`
const ImagesLeft = styled.div`
  ${'' /* padding: 32px; */}
`

const ThumbImg = styled.img`
width:40px;
height:40px;
background-color: transparent;
color: transparent;
border: .8px solid black;
border-radius: 1.9px;
margin-top: 5%;
margin-bottom: 5%;
&:hover {
  border: .8px solid #e56f14;
  ${'' /* outline: 3px solid #eda412; */}
  box-shadow: 0px 0px 5px 2px #eda412;
}

`

class Photos extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: false,
      images: [],
      main: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    axios.get('api/pictures/1')
     .then(res => {
       console.log('this is the response', res.data)
      //  console.log('parsing data = ', res.data[0].url)
       const pics = res.data[0].url.split(',')
       console.log('pics array =', pics)
       this.setState({
         main: pics[0],
         images: [...pics]
       })
    })
  }
  handleClick(e) {
    console.log('state of main img =', this.state.main)
    this.setState({
      main: e.target.src
    })
  }
  render() {
    const buttons = this.state.images.map((img, index) => (
    <ThumbImg src={img} key={index} onClick={this.handleClick}/>
    )) 
    return ( 
      <ImagesMain>
    <ImagesLeft>
  <AltImages>
      {buttons}
  </AltImages>
    <Img src={this.state.main}></Img>
  </ImagesLeft>
      </ImagesMain>
     )
  }
}
 
export default Photos;