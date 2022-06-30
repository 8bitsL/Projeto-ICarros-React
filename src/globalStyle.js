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

  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 1rem;
  }

  .sectionTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 130%;
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
`;

export default GlobalStyle;
