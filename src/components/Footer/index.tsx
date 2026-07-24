import { linkData } from "./data";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const { t } = useTranslation("common");

    return (
        <S.FooterContainer>
            <S.Logo>RR / PORTFOLIO</S.Logo>

            <S.Copyright>
                {currentYear} Roberto Rodriguez. Built with love.
            </S.Copyright>

            <S.LinkGroup>
                {linkData.map((link) => (
                    <S.FooterLink
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} ${t("misc.opensInNew")}`}
                    >
                        {link.label}
                    </S.FooterLink>
                ))}
            </S.LinkGroup>
        </S.FooterContainer>
    );
};

export default Footer;
