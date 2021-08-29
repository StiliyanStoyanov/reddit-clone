import {css} from "@emotion/react";

export const all_layout = css`
  display: flex;
  max-width: 1200px;
  flex-grow: 1;
`
export const content_layout = css`
  display: flex;
  max-width: 1200px; 
  flex-grow: 1;
  justify-content: center;
  margin: 0 auto;
  main {
    flex-basis: 70%;
    margin: 8px;
  }
  aside {
    flex-basis: 30%;
    margin: 8px;
  }
  @media (max-width: 1100px) {
    main {
      flex-basis: 100%;
    }
    aside {
      display: none;
    }
  }
`