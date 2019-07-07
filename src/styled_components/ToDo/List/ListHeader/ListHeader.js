import styled from 'styled-components';

export default styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 7px;
    span {
        display: flex;
        justify-content: center;
    }
    span:first-child,
    span:last-child {
        width: 93px;
    }
    span:nth-child(2) {
        width: 447px;
    }
`;
