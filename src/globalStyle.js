import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --primary-color: #fd5631;
    --accent-color: #5d3cf2;
    --success-color: #07c98b;
    --danger-color: #f23c49;
    --warning-color: #fdbc31;
    --info-color: #3c76f2;
    --black-color: #000000;
    --white-color: #ffff;
    --gray-900: #1f1b2d;
    --gray-800: #454056;
    --gray-700: #666276;
    --gray-600: #9691a4;
    --gray-500: #bbb7c5;
    --gray-400: #d5d2dc;
    --gray-300: #efecf3;
    --gray-200: #f5f4f8;
    --gray-100: #f9f8fa;
    --white: #ffffff;

    /* Gradients */
    --gradient-color: linear-gradient(26.21deg, #5d3cf2 0%, #fd5631 108.88%);

    /* Shadows */
    --background-shadow: #c4c4c4;
    --box-shadow-dafault: 0px 2px 8px -4px rgba(31, 27, 45, 0.12),
      0px 4px 16px rgba(31, 27, 45, 0.12);
    --box-shadow-small: 0px 2px 2px -2px rgba(31, 27, 45, 0.08),
      0px 4px 12px rgba(31, 27, 45, 0.08);
    --box-shadow-large: 0px 4px 12px -6px rgba(31, 27, 45, 0.2),
      0px 8px 16px rgba(31, 27, 45, 0.16);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Noto Sans", "sans-serif";
    font-size: 1.6rem;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 10px;
  }

  body {
    color: var(--white);
    background: var(--gray-900);
  }

  h1, h2, h3, h4, h5, h6 {
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--white);
  }

  button {
    cursor: pointer;
    border: none;
    text-decoration: none;
    color: var(--white);
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 7.2rem;
  }

  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
  }

  section .container {
    flex-direction: column;
  }

  .visually-hidden {
    /* This class hides an element in all devices except for the Screen Readers */
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  @media (min-width: 768px) {
    .hidden-when-md {
      display: flex !important;
    }
    .display-when-md {
      display: none !important;
    }
  }
  @media (max-width: 768px) {
    .hidden-when-md {
      display: none !important;
    }
    .display-when-md {
      display: flex !important;
    }
  }
  @media (min-width: 992px) {
    .hidden-when-lg {
      display: flex !important;
    }
    .display-when-lg {
      display: none !important;
    }
  }
  @media (max-width: 992px) {
    .hidden-when-lg {
      display: none !important;
    }
    .display-when-lg {
      display: flex !important;
    }
  }

  /* Form Fields */

  label {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  fieldset {
    width: auto;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-height: 200px;
    overflow-y: auto;

    legend {
      margin-bottom: 1.2rem;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 150%;
    }

    & > div > label {
      margin-bottom: 0;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .doubleFields {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .doubleFields > div {
      width: 100%;
    }
    .doubleFields .separator {
      width: 3rem;
      margin: 0 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  input,
  textarea,
  select {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    color: white;

    padding: 1.25rem 1.6rem;
    text-decoration: none;
    font-size: 1.6rem;
    margin: 0;
  }

  input[type="radio"],
  input[type="checkbox"] {
    width: fit-content;
  }

  input[type="checkbox"]:not(:checked) {
    all: unset;
    width: 9.82px;
    height: 9.82px;
    padding: 0;
    background-color: transparent;
    border: 1.1px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px !important;
  }

  input[type="checkbox"] {
    accent-color: var(--primary-color);
  }

  select {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    background-position: calc(100% - 1.2rem) center !important;
    background: rgba(255, 255, 255, 0.04) url("../img/icons/chevron-down.svg")
      no-repeat;
    padding-right: 3rem;

    option {
      color: initial;
    }

    &::-ms-expand {
      /* To remove the arrow of select element in IE */
      display: none;
    }
  }

  input, textarea, select {
    &:focus {
      outline: none !important;
      border: 1px solid var(--primary-color) !important;
      box-shadow: var(--box-shadow-dafault);
    }
    &:disabled {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  input, textarea {
    &:-moz-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export default GlobalStyle;
