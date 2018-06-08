import styled from "styled-components";

export const AltImages = styled.div`
  width: 40px;
  margin-left: 0px;
  float: left;
`;
export const ImagesMain = styled.div`
  position: relative;
  overflow: auto;
  width: auto;
  height: auto;
`;
export const ImagesLeft = styled.div``;

export const ZoomContainer = styled.div`
  width: auto;
  height: auto;
  overflow: auto;
  position: relative;
`;
export const ImageContainer = styled.div`
  width: auto;
  height: auto;
  padding-left: 0.3%;
  overflow: auto;
  position: relative;
`;

export const Popover = styled.div`
  z-index: 10;
  width: 75%%;
  height: auto;
  max-width: none;
  max-height: none;
  opacity: 1;
  box-sizing: content-box;
  position: center;
  margin: 75px 0px 75px 45px;
  visibility: visible;
`;

export const ImageGalMain = styled.img`
  height: 600px;
  width: auto;
`;
export const ImageGalThumb = styled.img`
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 1%;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: transparent;
  border: 0.8px solid black;
  border-radius: 1.9px;
  float: right;
`
export const ImageGalMainThumb = styled.img`
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 1%;
  width: 50px;
  height: 50px;
  float: right;
  background-color: transparent;
  color: transparent;
  border-radius: 1.9px;
  border: ${props =>
  props.isSelected ? "0.8px solid #e56f14" : "0.8px solid black"};
  box-shadow: ${props => (props.isSelected ? "0px 0px 5px 2px #eda412" : "")};
`;

export const ThumbImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: transparent;
  border: 0.8px solid black;
  border-radius: 1.9px;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const MainThumb = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: transparent;
  border-radius: 1.9px;
  margin-top: 5%;
  margin-bottom: 5%;
  border: ${props =>
    props.isSelected ? "0.8px solid #e56f14" : "0.8px solid black"};
  box-shadow: ${props => (props.isSelected ? "0px 0px 5px 2px #eda412" : "")};
`;
