import { useEffect, useState } from "react";
import { useNavLinks } from "../../hooks/useNavLinks";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const MobileMenu: React.FC = () => {
    const NAV_LINKS = useNavLinks();

    const { t } = useTranslation("common");

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <S.BurgerPopup>
            <S.BurgerButton
                $isOpen={isOpen}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-nav-dropdown"
                aria-label={isOpen ? t("menu.close") : t("menu.open")}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </S.BurgerButton>

            <S.NavDropdown $isOpen={isOpen} id="mobile-nav-dropdown">
                {NAV_LINKS.map((link) => (
                    <S.MenuItem key={link.id}>
                        <S.MenuLink to={link.path} onClick={closeMenu}>
                            {link.name}
                        </S.MenuLink>
                    </S.MenuItem>
                ))}
            </S.NavDropdown>
        </S.BurgerPopup>
    );
};

export default MobileMenu;
