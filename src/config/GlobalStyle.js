import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Segoe UI';
        background-color: ${({ theme }) => theme.colors.back[1]};
        color: ${({ theme }) => theme.colors.front[0]};
    }
`;

export default GlobalStyle;
