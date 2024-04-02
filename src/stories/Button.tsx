import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary";
  backgroundColor?: string;
  // size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 12px 50px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  text-transform: none;
  transition: 0.4s;

  ${({ theme, backgroundColor, variant }) => `
    background-color: ${backgroundColor ? backgroundColor : theme.button.color[variant].backgroundColor};
    color: ${theme.button.color[variant].color};
    
    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.button.color[variant]["&:disabled"].backgroundColor};
      border-color: ${theme.button.color[variant]["&:disabled"].borderColor};
    }

    &:hover {
        background-color: ${theme.button.color[variant]["&:hover"].backgroundColor};
        border-color: ${theme.button.color[variant]["&:hover"].borderColor};
        color: ${theme.button.color[variant]["&:hover"].color};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      &:active {
        background-color: ${theme.button.color[variant]["&:active"].backgroundColor};
        border-color: ${theme.button.color[variant]["&:active"].borderColor};
        color: ${theme.button.color[variant]["&:active"].color};
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }

`};
`;

export const Button = ({
  label,
  variant,
  backgroundColor,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
