import styled from 'styled-components';

export default styled.div`
    position: relative;
    display: flex;
    min-height: 80px;
    color: white;
    background-color: #2c3e50;
    background-image:
        linear-gradient(45deg, #34495e 25%, transparent 25%),
        linear-gradient(-45deg, #34495e 25%, transparent 25%),
        linear-gradient(135deg, #34495e 25%, transparent 25%),
        linear-gradient(-135deg, #34495e 25%, transparent 25%);
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 20px 20px;
    box-shadow: 0 0 5px 0 #333;
`;
