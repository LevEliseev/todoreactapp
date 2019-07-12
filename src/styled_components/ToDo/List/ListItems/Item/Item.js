import styled from 'styled-components';

export default styled.div`
    display: flex;
    border: 1px solid black;
    min-height: 8vh;
    width: 680px;
    margin-bottom: 1vh;

    .comp {
        color: grey;
        text-decoration: line-through;
    }
    .notcomp {
        color: black;
    }
    &:hover p {
        white-space: normal;
    }
`;
