import React, { Component } from "react";
import styled from "styled-components";

const ThumbImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: transparent;
  border: 0.8px solid black;
  border-radius: 1.9px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Thumbnail = (props) => {

  const handleSelect = (e) => {
    props.handleClick(e);
    console.log('props.selected =', props.selected)
    e.target.style.border = ".8px solid #e56f14";
    e.target.style.boxShadow = "0px 0px 5px 2px #eda412";
    if (e.target.src !== props.selected.src) {
      props.selected.style.border = ".8px solid black";
      props.selected.style.boxShadow = "";
    }
  }
    return (
      <ThumbImg
        src={props.img}
        className={props.img}
        id={props.id}
        onMouseEnter={handleSelect}
      />
    );
  }

export default Thumbnail;
