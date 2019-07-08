import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 80px;
    font-size:15px;
    user-select: none;
    border-right: 1px solid gray;

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"] + label {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 20px;
        font: 14px/20px 'Open Sans', Arial, sans-serif;
        cursor: pointer;
    }

    input[type="checkbox"] + label:last-child {
        margin-bottom: 0;
    }

    input[type="checkbox"] + label:before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid #6cc0e5;
        position: absolute;
        left: 0;
        top: 0;
        opacity: .6;
        transition: all .12s, border-color .08s;
    }

    input[type="checkbox"]:checked + label:before {
        width: 10px;
        top: -5px;
        left: 5px;
        border-radius: 0;
        opacity: 1;
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
    }
`;
