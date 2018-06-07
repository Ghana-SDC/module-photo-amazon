import React, { Component } from "react";
import styled from "styled-components";
import PhotoGallery from "./PhotoGallery.jsx"

const Img = styled.img`
  width: 480px;
  height: auto;
  padding-left: 0.3%;
  overflow: auto;
  position: relative;
  cursor: pointer;
`;
const Frame = styled.div`
  ${'' /* height: 100px;
  width: 200px;
  top: 0;
  left: 0;
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.8);
  position: absolute;
  pointer-events: none; */}
`;
const ZContainer = styled.div`
  width: 480px;
  height: auto;
  overflow: hidden;
  position: absolute;
  background-position: 0 0;
`;

const Text = styled.div`
  padding-left: 200px;
  font-family: lato;
  font-color: grey;
  font-size: small;
`;

class PhotoZoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomed: false
    };
    this.frameHeight = 100;
    this.frameWidth = 200;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.getTargetElement = this.getTargetElement.bind(this);
  }

  getTargetElement = (el, targetId) => {
    const children = el.parentNode.childNodes;
    return Array.from(children).find(item => item.id === targetId);
  }

  addFrame = (x, y, el) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    const minX = Math.min(x, left + width - this.frameWidth);
    const minY = Math.min(y, top + height - this.frameHeight);
    const frameEl = this.getTargetElement(el, "frame");
    frameEl.style.left = `${minX}px`;
    frameEl.style.top = `${minY}px`;
    frameEl.style.width = "200px";
    frameEl.style.height = "200px";
    // frameEl.style.display = "none";
    frameEl.style.position = "absolute";
    frameEl.style.background = 'hsla(0, 0%, 100%, .3)';
    frameEl.style.border = '1px solid #ccc';
    //These scaled values determine the cursor position relative to the img
    let scaledX = -3 * (minX - el.offsetLeft);
    let scaledY = -3 * (minY - el.offsetTop);
    // scaledX > 0 ? scaledX = scaledX - 160 : scaledX
    // scaledY > 0 ? scaledY = scaledY - 120 : scaledY
    // console.log('scaledX =', scaledX, 'scaledY =', scaledY)
    this.getTargetElement(
      el,
      "zoomContainer"
    ).style.backgroundPosition = `${scaledX}px ${scaledY}px`;
  }

  hide = (id, el) => {
    this.getTargetElement(el, id).style.display = "none";
  }

  showZoomedContainer = (el) => {
    const targetEl = this.getTargetElement(el, "zoomContainer");
    targetEl.style.display = "block";
    const { left, top, width } = el.getBoundingClientRect();
    targetEl.style.left = `${left + width}px`;
    targetEl.style.top = `${0}px`;
    targetEl.style.width = "480px";
    targetEl.style.height = "360px";
    targetEl.style.overflow = "hidden";
    targetEl.style.position = "absolute";
    targetEl.backgroundPosition = "0 0";

    targetEl.style.background = `url(${this.props.main}) no-repeat`;
    targetEl.style.backgroundSize = `${3 * 480}px ${3 * 400}px`;
  }

  handleMouseEnter(e) {
    this.getTargetElement(e.target, "frame").style.display = "block";
    this.showZoomedContainer(e.target);
    this.setState({
      zoomed: !this.state.zoomed
    });
  }

  handleMouseMove(e) {
    this.addFrame(e.clientX, e.clientY, e.target);
  }

  handleMouseLeave(e) {
    this.hide("frame", e.target);
    this.hide("zoomContainer", e.target);
    this.setState({
      zoomed: !this.state.zoomed
    });
  }
  handlePhotos(e) {
    <PhotoGallery current={e.target} images={this.props.images} />
  }

  render() {
    const zoom = this.state.zoomed
      ? "Click image to open expanded view"
      : "Roll over image to zoom in";
    return (
      <div>
        <div className="zoomies">
          {/* <Img
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            src={this.props.main}
            onClick={this.handlePhotos}
          /> */}
          <PhotoGallery 
            handleMouseMove={this.handleMouseMove}
            handleMouseLeave={this.handleMouseLeave}
            handleMouseEnter={this.handleMouseEnter}
            src={this.props.main}
            images={this.props.images}
          />
          <Frame id="frame" className="frame" />
          <ZContainer id="zoomContainer" className={this.props.main} />
        </div>
        <Text>{zoom} </Text>
      </div>
    );
  }
}

export default PhotoZoom;
