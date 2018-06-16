import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  ${'' /* max-width: 70%;
  max-height: 50%;
  min-width: 70%; */}
`;

export const AltImages = styled.div`
  width: 40px;
  margin-left: 0px;
  float: left;
`;
export const ImagesMain = styled.div`
  position: relative;
  overflow: auto;
  width: 380px;
  min-width: 322px;
  height: auto;
  ${'' /* max-width: 700px; */}
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
  ${'' /* max-width: 60%; */}
  height: auto;
  ${'' /* max-height: 50%; */}
  ${"" /* max-width: 800px;
  max-height: 400px; */} padding-left: 0.9%;
  overflow: hidden;
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
  width: 500px;
  height: 334px;
  max-width: 500px;
  position: relative;
`;
export const ImageGalThumb = styled.img`
  display: inline-block;
  margin-left: 2%;
  margin-bottom: 25%;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: transparent;
  border: 0.8px solid black;
  border-radius: 1.9px;
  position: relative;
`;
export const ImageGalMainThumb = styled.img`
  display: inline-block;
  margin-left: 2%;
  margin-bottom: 25%;
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: transparent;
  border-radius: 1.9px;
  position: relative;
  border-radius: 1.9px;
  border: ${props =>
    props.isSelectedMod ? "0.8px solid #e56f14" : "0.8px solid black"};
  box-shadow: ${props => (props.isSelectedMod ? "0px 0px 5px 2px #eda412" : "")};
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

export const Span = styled.span`
  margin-left: 10%;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #111;
`;

export const Close = styled.button`
  position: absolute;
  ${"" /* float: right; */} ${"" /* margin-bottom: 5%;
  margin-left: 15%; */}
  top: 5px;
  right: 5px;
`;
