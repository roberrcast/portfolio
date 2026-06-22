import { linkData } from "./data";
import * as S from "./styles";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <S.FooterContainer>
            <S.Logo>RR / PORTFOLIO</S.Logo>

            <S.Copyright>
                {currentYear} Roberto Rodriguez. Built with precision.
            </S.Copyright>

            <S.LinkGroup>
                {linkData.map((link) => (
                    <S.FooterLink
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label}
                    </S.FooterLink>
                ))}
            </S.LinkGroup>
        </S.FooterContainer>
    );
};

export default Footer;
