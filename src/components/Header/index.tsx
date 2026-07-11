import * as S from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RouterLinkButton from "../../common/RouterLinkButton";
import { useNavLinks } from "../../hooks/useNavLinks";
import MobileMenu from "../MobileMenu";
import { LanguageToggle } from "../../LanguageToggle";

export const Header = () => {
    const { t } = useTranslation("common");
    /* Add i18n to this if you want to define the toggle here */

    const NAV_LINKS = useNavLinks();

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
                        to={"/hire"}
                        text={t("buttons.hireMe")}
                        variant={S.hireMeButtonTheme}
                    />

                    <LanguageToggle />
                </S.ButtonsContainer>
            </S.NavContent>
        </S.Header>
    );
};
