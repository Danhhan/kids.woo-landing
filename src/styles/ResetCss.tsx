import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: 400;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  video {
    max-width: auto;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.text.light};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: none;
    background: transparent; 
    border-radius: 10px;
  }
  /* FORM */
  .msg.error {
    font-size: 12px;
    color: #EB5757;
    text-align: left;
  }
`
