import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    secondaryText: string;
    background: string;
    cardBg: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    shadow: string;
    hoverBg: string;
  }
} 