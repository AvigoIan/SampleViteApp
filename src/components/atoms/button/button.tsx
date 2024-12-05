import styled from "@emotion/styled";

const ButtonDiv = styled.button`
  color: hotpink;
  font-size: 20px;
`;

interface Props {
  label: string;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ label, onClick }) => {
  return <ButtonDiv onClick={onClick}>{label}</ButtonDiv>;
};

export default Button;
