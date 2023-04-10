import styled from "styled-components";

interface TitleProps {
  color?: string;
  align?: string;
  isBold?: boolean;
  margin?: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align || "center"};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  margin: ${(props) => props.margin || "0"};
`;