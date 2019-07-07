import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-around;
    width: 98px;
    button {
        height: 17px;
        border: none;
        background: transparent;
        cursor: pointer;
        outline: none;
        img {
            width: 16px;
        }
        &:active img {
            width: 17px;
        }
    }
`;
