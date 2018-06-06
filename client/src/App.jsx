import React, { Component } from 'react';
import Photos from './components/Photos.jsx';
import styled from 'styled-components';
import axios from 'axios';

const PicContext = React.createContext();


class App extends Component {
  state = {
      images: [],
      main: '',
      selected: []
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
  render() { 
    return ( 
      <PicContext.Provider>
      <Photos />
      </PicContext.Provider>
    )
  }
}

export default App;