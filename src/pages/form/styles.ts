import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #282c34;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  margin: 50px;
  background-color: #90b3f7;
  border-radius: 10px;
  .col{
    display: inline-block;
    margin: 10px;
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #fff;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
    }
    button {
      background: #ff9000;
      border-radius: 10px;
      border: none;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #312e38;
      font-weight: bold;
      margin-top: 16px;
      transition: background 0.2s;
      &:hover {
        background: #ff9045;
      }
    }
    a {
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    text-decoration: none;
  }
`;