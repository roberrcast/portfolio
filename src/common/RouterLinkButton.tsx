import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonMixin, type ButtonVariant } from "../styles/mixins";

interface RouterLinkButtonProps extends React.ComponentProps<typeof Link> {
    text: string;
    variant: ButtonVariant;
    icon?: string;
    iconPosition?: "left" | "right";
}

const StyledRouterLink = styled(Link)<{
    $variantConfig: ButtonVariant;
}>`
    ${(props) => buttonMixin(props.$variantConfig)}
`;

export const RouterLinkButton: React.FC<RouterLinkButtonProps> = ({
    text,
    variant,
    icon,
    iconPosition = "right",
    ...rest
}) => {
    return (
        <StyledRouterLink $variantConfig={variant} {...rest}>
            {icon && iconPosition === "left" && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
            {text}
            {icon && iconPosition === "right" && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
        </StyledRouterLink>
    );
};

export default RouterLinkButton;
