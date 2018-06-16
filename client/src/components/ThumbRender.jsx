import React from "react";
import { ThumbImg, MainThumb, ImageGalMainThumb, ImageGalThumb } from './style'

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
  const handleEnterMod = (e) => {
    if(e.target.src !== props.main) {
    e.target.style.border = ".8px solid blue";
    e.target.style.boxShadow = "0px 0px 5px 2px blue";
    }
  }
  const handleLeaveMod = (e) => {
    if(e.target.src !== props.main) {
    e.target.style.border = ".8px solid black";
    e.target.style.boxShadow = ""
    }
  }
  const handleSelectMod = (e) => {
    props.handleClick(e);
    e.target.style.border = ".8px solid #e56f14";
    e.target.style.boxShadow = "0px 0px 5px 2px #eda412";
  }


  if(props.showModal) {
    if(props.img === props.main) {
    return <ImageGalMainThumb src={props.img} className="thumbsGalMain" id={props.id} onMouseEnter={handleEnterMod} onMouseLeave={handleLeaveMod} isSelectedMod={props.isSelectedMod} onClick={handleSelectMod}/>
    } else {
      return <ImageGalThumb src={props.img} className="thumbsGal" id={props.id} onMouseEnter={handleEnterMod} onMouseLeave={handleLeaveMod} isSelectedMod={props.isSelectedMod} onClick={handleSelectMod}/>
    }
  }

  if(props.id === 0) {
    return <MainThumb src={props.img} className="thumb" id={props.id} onMouseOver={handleSelect} isSelected={props.isSelected}/>
  } else {
    return <ThumbImg src={props.img} className="thumbs" id={props.id} onMouseOver={handleSelect} isSelected={props.isSelected}/>
  }
}

export default ThumbRender;

/*
style={ImageGalMainThumb}
style={ImageGalThumb}
style={MainThumb}
style={ThumbImg}
*/