import styled from "styled-components";
import { buttonMixin, type ButtonVariant } from "../styles/mixins";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant: ButtonVariant;
    icon?: string;
}

const StyledButton = styled.button<{ $variantConfig: ButtonVariant }>`
    ${(props) => buttonMixin(props.$variantConfig)}
`;

export const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    icon,
    type = "button",
    ...rest
}) => {
    return (
        <StyledButton type={type} $variantConfig={variant} {...rest}>
            {text}
            {icon && <span className="material-symbols-outlined">{icon}</span>}
        </StyledButton>
    );
};
