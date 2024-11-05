import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  header {
    width: 100%;
    height: 38px;
    padding: 0 15px;
    line-height: 38px;
    font-size: 16px;
    font-weight: 600;
  }
  #mail_form_wrapper {
    height: auto;
    background-color: #fff;
    header {
      color: white;
      background-color: lightskyblue;
    }
    & > form {
      padding: 20px;
      label {
        width: 1000px;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        line-height: 50px;
        justify-content: space-between;
        margin-bottom: 50px;
      }
    }
    input,
    textarea {
      width: calc(100% - 110px);
      height: auto;
      line-height: normal;
      padding: 0.8em 0.5em;
      font-family: inherit;
      border: none;
      border-radius: 0;
      outline-style: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
    }
    input::placeholder {
      color: #d4d4d4;
    }
    .message_label {
      border: none;
      margin: 0;
    }
    textarea {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.5);
      resize: none;
    }
    #upload_button {
      border: none;
      width: 200px;
      height: 43px;
      border-radius: 4px;
      color: white;
      background-color: lightskyblue;
      text-align: center;
      line-height: 43px;
      font-size: 18px;
      font-weight: 600;
      display: block;
      margin: 20px auto;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
    }
  }
`;
