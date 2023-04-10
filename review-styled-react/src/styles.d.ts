import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      background: string;
      fontColor: {
        primary: string;
        secondary: string;
      }
    };
  }
}