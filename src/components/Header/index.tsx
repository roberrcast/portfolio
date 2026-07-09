import * as S from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RouterLinkButton from "../../common/RouterLinkButton";
import { useNavLinks } from "../../hooks/useNavLinks";
import MobileMenu from "../MobileMenu";
import { LanguageToggle } from "../../LanguageToggle";

export const Header = () => {
    const { t, i18n } = useTranslation("common");

    const NAV_LINKS = useNavLinks();

    const toggleLanguage = () => {
        const nextLang = i18n.language.startsWith("en") ? "es" : "en";
        i18n.changeLanguage(nextLang);
    };

    const currentLabel = i18n.language.startsWith("es") ? "ES" : "EN";

    return (
        <S.Header>
            <S.NavContent>
                <S.LogoMenuContainer>
                    <S.Logo>
                        <Link to={"/"}>{"{ io }"}</Link>
                    </S.Logo>

                    <MobileMenu />
                </S.LogoMenuContainer>

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
                    <RouterLinkButton
                        to={"/contact"}
                        text={t("buttons.hireMe")}
                        variant={S.hireMeButtonTheme}
                    />

                    {/* <S.LanguageToggle */}
                    {/*     onClick={toggleLanguage} */}
                    {/*     aria-label={t("languageToggle")} */}
                    {/* > */}
                    {/*     <span className="material-symbols-outlined"> */}
                    {/*         translate */}
                    {/*     </span> */}
                    {/**/}
                    {/*     <span>{currentLabel}</span> */}
                    {/* </S.LanguageToggle> */}

                    <LanguageToggle />
                </S.ButtonsContainer>
            </S.NavContent>
        </S.Header>
    );
};
