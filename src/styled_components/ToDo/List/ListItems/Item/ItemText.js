import styled from 'styled-components';

export default styled.div`
    width: 440px;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;

    span {
        font-size: 20px;
        font-weight: bold;
        color: darkblue;
        font-family: 'Indie Flower', cursive;
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        font-family: 'Indie Flower', cursive;
    }

    

    &:hover p {
        white-space: normal;
    }
`;
