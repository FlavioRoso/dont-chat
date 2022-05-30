import styled from 'styled-components';

export const Container = styled.div`
  
  margin: 0 auto;
  
  height: fit-content;
  width: 1000px;
  max-width: 100%;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  background-color: #F9F9F9;
  border: 1px #ddd;
  border-radius: 20px;

  @media only screen and (max-width: 600px) {
    position: inherit;
    transform: none;
   
  }
  `;
  

export const Messages = styled.div`
  padding: 30px;
  padding-bottom: 100px;
  overflow-y: scroll;
  max-width: 1000px;
  height: 700px; 
  
  @media only screen and (max-width: 600px) {
    height: 100vh; 
    border-radius: 0px;

  }
`;

export const Message = styled.div`
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  position: relative;
  padding: 15px 10px;
  margin-bottom: 10px;
  height: fit-content;
  width: 500px;
  width: 45%;
  margin-right: 20%;
  overflow:hidden;
  border-radius: 20px 20px 20px 0px;
  float:left;
  box-shadow: 1px 4px 8px 2px rgba(130,130,130,0.2);
  
  &.sender{
  border-radius: 20px 20px 0px 20px;

    float:right;
    margin-left: 20%;
    margin-right: 0;

    background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
    *{
      color: #fff;
    }

    &::after{
      color: #fff;
    }
    

  }

  &::after{
    content : '${(props) => props.date}';
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight:600;


  }
  
  
  
`;

export const Name = styled.h3`

  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  color: #444;
  font-size: 15px;
  font-weight:600;

  

`;

export const MessageText = styled.p`
  
  font-size: 15px;
  
 
`;





export const FormName = styled.form`
  
  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: rgba(160,160,160,0.2);
  backdrop-filter: blur(5px);
  z-index: 99999;
  display: ${(props) => props.active ? "block" : "none"};
 
`;


export const Center = styled.div`
  padding: 20px;

  min-width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 20px;

  p{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
  }

  input{
    width: 100%;
    font-size: 20px;

  }

  button{
    
    background-color: transparent;
    font-size: 20px;
    color: #444;
    cursor: pointer;
  }
  
  .form-input{
    border-radius: 15px;
    border: 1px solid #444;
    display: flex;
    padding: 10px 15px;
    overflow: hidden;
    
  }

`;




