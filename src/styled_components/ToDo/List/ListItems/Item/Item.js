import styled from 'styled-components';

export default styled.div`
    display: flex;
    height: 20.8px;
    div > input[type="checkbox"] div > span {
        color: red;
    }
    input[type="checkbox"]:checked + span {
        color: blue;
        text-decoration: line-through;
    }
    .comp {
        color: grey;
        text-decoration: line-through;
    }
    .notcomp {
        color: black;
    }
`;
