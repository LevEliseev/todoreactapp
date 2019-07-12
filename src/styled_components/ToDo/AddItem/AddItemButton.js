import styled from 'styled-components';

export default styled.button`
    position: absolute;
    top: 5px;
    left: 10px;
    width: 30px;
    height: 30px;
    color: #1a1a1a;
    background: #ed1c5b;
    border-radius: 50%;
    border: none;
    user-select: none;
    outline: none;
    cursor: pointer;
    transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1);
    &:after{
        content: "+";
        font-size: 1.5em;
        line-height: 1.1em;
    }
    &:hover{
        transform: rotate(90deg);
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
`;