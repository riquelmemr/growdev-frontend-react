import styled from 'styled-components';

interface ContainerProps {
	display?: string;
	flexDirection?: string;
	alignItems?: string;
	justifyContent?: string;
}

const Container = styled.main<ContainerProps>`
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.flexDirection};
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
`;

export default Container;
