import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    button {
        height: 23px;
        border: none;
        background: transparent;
        cursor: pointer;
        outline: none;
        img {
            width: 16px;
            border: 1px solid black;
            padding: 2px;
        }
        &:active img {
            width: 17px;
        }
    }
`;
