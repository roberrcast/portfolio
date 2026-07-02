import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonMixin, type ButtonVariant } from "../styles/mixins";

interface RouterLinkButtonProps extends React.ComponentProps<typeof Link> {
    text: string;
    variant: ButtonVariant;
    icon?: string;
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
    ...rest
}) => {
    return (
        <StyledRouterLink $variantConfig={variant} {...rest}>
            {text}
            {icon && <span className="material-symbols-outlined">{icon}</span>}
        </StyledRouterLink>
    );
};

export default RouterLinkButton;
