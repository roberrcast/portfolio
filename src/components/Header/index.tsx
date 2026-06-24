import * as S from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t, i18n } = useTranslation("common");

    const NAV_LINKS = [
        { id: 1, name: t("nav.works"), path: "/works" },
        { id: 2, name: t("nav.about"), path: "/about" },
        { id: 3, name: t("nav.contact"), path: "/contact" },
        { id: 4, name: t("nav.stack"), path: "/stack" },
    ];

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith("en") ? "es" : "en";
        i18n.changeLanguage(nextLang);
    };

    const currentLabel = i18n.language.startsWith("es") ? "ES" : "EN";

    return (
        <S.Header>
            <S.NavContent>
                <S.Logo>
                    <Link to={"/"}>{"{ IO }"}</Link>
                </S.Logo>

                <S.NavLinks>
                    <S.List>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <S.NavLink to={link.path}>
                                    {link.name}
                                </S.NavLink>
                            </li>
                        ))}
                    </S.List>
                </S.NavLinks>

                <S.ButtonsContainer>
                    <S.HireMe>{t("buttons.hireMe")}</S.HireMe>

                    <S.LanguageToggle
                        onClick={toggleLanguage}
                        aria-label={t("languageToggle")}
                    >
                        <span className="material-symbols-outlined">
                            language
                        </span>

                        <span>{currentLabel}</span>
                    </S.LanguageToggle>
                </S.ButtonsContainer>
            </S.NavContent>
        </S.Header>
    );
};
