import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .login {
    border: 1px solid gray;
    width: 400px;
    border-radius: 8px;
    box-shadow: 1px 1px 12px 4px rgb(92 88 92 / 51%);
    padding: 10px 50px 60px 50px;
  }
  .header {
    p:nth-of-type(1) {
      font-size: 36px;
      color: #3a893a;
      margin-bottom: 0;
    }
    p:nth-of-type(2) {
      font-size: 24px;
      margin-top: 0;
    }
  } 
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    label {
      color: gray;
      display: block;
    }
    input {
      width: 100%;
      height: 24px;
      border: 2px solid gray;      
      border-radius: 4px;
    }
    .btn {
      width: 100%;
      height: 36px;
      background: #96d096;
      color: white;
      font-size: large;
      border: none;
    }
    .errMsg {
      color: red;
    }
    .validMsg {
      display: none;
    }
  }
  }
`;
