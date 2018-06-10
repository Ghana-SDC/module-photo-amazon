import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Modal from 'react-modal';



Modal.setAppElement('#root')

render(<App />, document.getElementById('root'));
