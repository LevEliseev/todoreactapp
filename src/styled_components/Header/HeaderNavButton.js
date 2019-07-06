import styled from 'styled-components';

export default styled.button`
position: relative;
width: 6vw;
padding: 8px 10px 8px 14px;
color: white;
font-family: 'Indie Flower', cursive;
font-size: 22px;
font-weight: bold;
background-color: transparent;
outline: none;
border: none;
transition: color 0.5s;
cursor: pointer;

&:before {
    content: "";
    box-sizing: border-box;
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px dashed #0fe0f5;
}
  
&:after {
    content: "";
    box-sizing: border-box;
    z-index: 2;
    position: absolute;
    left: 4px;
    top: 4px;
    width: 100%;
    height: 100%;
    border: 2px dashed white;
    transition: all 0.2s 0.2s;
}
  
&:hover {
    color: #0fe0f5;
    
    &:after {
      left: 1px;
      top: 1px;
    }
}
`;
