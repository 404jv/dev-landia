import styled from 'styled-components/native';

export const BashContent = styled.View`
  flex-direction: row;
  margin-left: 16px;
  flex-wrap: wrap;
`;

export const Circle = styled.View`
	margin-left: 4px;
	margin-top: 3px;
	width: 14px;
	height: 14px;
	border-radius: 50px;
`;

export const Header = styled.View`
	flex-direction: row;
	height: 20px;
	background-color: #1C2124;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export const Body = styled.View`
	min-height: 120px;
	background-color: #000;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Arrow = styled.Text`
	margin-left: 4px;
	color: #008000;
  font-size: 24px;
`;
