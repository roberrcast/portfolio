import styled from "styled-components";
import { buttonMixin, type ButtonVariant } from "../styles/mixins";

interface LinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    variant: ButtonVariant;
    icon?: string;
}

const StyledLink = styled.a<{
    $variantConfig: ButtonVariant;
}>`
    ${(props) => buttonMixin(props.$variantConfig)}
`;

export const LinkButton: React.FC<LinkButtonProps> = ({
    text,
    variant,
    icon,
    ...rest
}) => {
    return (
        <StyledLink $variantConfig={variant} {...rest}>
            {text}
            {icon && (
                <span className="material-symbols-outlined" aria-hidden="true">
                    {icon}
                </span>
            )}
        </StyledLink>
    );
};

export default LinkButton;
