import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 480px;
  height: auto;
  padding-left: 0.3%;
  overflow: auto;
  ${"" /* display: block; */} position: relative;
  cursor: pointer;
`;
const Frame = styled.div`
  top: 0;
  left: 0;
  display: none;
  position: absolute;
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
  }

  getTargetElement(el, targetId) {
    const children = el.parentNode.childNodes;
    return Array.from(children).find(item => item.id === targetId);
  }

  addFrame(x, y, el) {
    const { left, top, width, height } = el.getBoundingClientRect();
    const minX = Math.min(x, left + width - this.frameWidth);
    const minY = Math.min(y, top + height - this.frameHeight);
    const frameEl = this.getTargetElement(el, "frame");
    frameEl.style.left = "0px";
    frameEl.style.top = "0px";
    // frameEl.style.width = "200px";
    // frameEl.style.height = "100px";
    frameEl.style.position = "absolute";
    //These scaled values determine the cursor position relative to the img
    let scaledX = -3 * (minX - el.offsetLeft- 80);
    let scaledY = -3 * (minY - el.offsetTop - 60);
    scaledY > 0 ? scaledY = scaledY - 240 : scaledY
    scaledX > 0 ? scaledX = scaledX - 180 : scaledX
    console.log('scaledX =', scaledX, 'scaledY =', scaledY)
    this.getTargetElement(
      el,
      "zoomContainer"
    ).style.backgroundPosition = `${scaledX}px ${scaledY}px`;
  }

  hide(id, el) {
    this.getTargetElement(el, id).style.display = "none";
  }

  showZoomedContainer(el) {
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

  render() {
    const zoom = this.state.zoomed
      ? "Click image to open expanded view"
      : "Roll over image to zoom in";
    return (
      <div>
        <div className="zoomies">
          <Img
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
            src={this.props.main}
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
