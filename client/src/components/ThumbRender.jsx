import React, { Component } from "react";
import styled, { css } from "styled-components";
import { ThumbImg, MainThumb} from './style'

const ThumbRender = (props) => {
  const handleSelect = (e) => {
    props.handleClick(e);
    e.target.style.border = ".8px solid #e56f14";
    e.target.style.boxShadow = "0px 0px 5px 2px #eda412";
    if (e.target.src !== props.selected.src && props.selected.src) {
      props.selected.style.border = ".8px solid black";
      props.selected.style.boxShadow = "";
    }
  }

  if(props.id === 0) {
    return <MainThumb src={props.img} className={props.img} id={props.id} onMouseOver={handleSelect} isSelected={props.isSelected}/>
  } else {
    return <ThumbImg src={props.img} className={props.img} id={props.id} onMouseOver={handleSelect} isSelected={props.isSelected}/>
  }
}

export default ThumbRender;