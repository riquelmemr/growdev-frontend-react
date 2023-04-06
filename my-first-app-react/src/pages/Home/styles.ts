import styled from "styled-components";

// interface HeadingProps {
//   size: string;
//   color?: string;
// }

// const Heading = styled.h1<HeadingProps>`
//   font-size: ${props => props.size};
//   color: ${props => props.color || '#fff'};
// `;

// props.theme => obtém através do escopo/hierarquia do ThemeProvider utilizado no `main.tsx`

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.success};
`;

export default Heading;
