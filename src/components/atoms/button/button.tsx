import styled from "@emotion/styled";

const ButtonDiv = styled.div`
  color: hotpink;
  font-size: 20px;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}
export const Button: React.FC<Props> = () => {
  return <ButtonDiv>hi</ButtonDiv>;
};
