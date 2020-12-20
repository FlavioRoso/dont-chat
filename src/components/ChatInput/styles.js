import styled from 'styled-components';

export const Container = styled.form`
    position: fixed;
    display: flex;
    right: 0px;
    padding: 10px;
    bottom: 0px;
    width: 100%;
    background-color: #fff;

    `;

export const Input = styled.input`

    width: 100%;
    padding: 10px;
    font-size: 17px;
    background-color: #f2f2f2;
    font-family: 'Roboto', sans-serif;
    color: #444;
    border-radius: 20px;

  
`;

export const Button = styled.button`

    color: #fff;
    margin-left: 10px;
    width: 53px;
    height: 50px;
    background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
  
`;
