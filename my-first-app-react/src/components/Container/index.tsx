import styled from "styled-components";

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.main<React.CSSProperties & ContainerProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
`;

export default Container;