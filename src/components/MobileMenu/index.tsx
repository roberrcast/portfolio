import { useState } from "react";
import { useNavLinks } from "../../hooks/useNavLinks";
import * as S from "./styles";

export const MobileMenu: React.FC = () => {
    const NAV_LINKS = useNavLinks();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <S.BurgerPopup>
            <input type="checkbox" checked={isOpen} onChange={toggleMenu} />

            <S.BurgerButton
                $isOpen={isOpen}
                onClick={toggleMenu}
                role="button"
                tabIndex={0}
            >
                <span></span>
                <span></span>
                <span></span>
            </S.BurgerButton>

            <S.NavDropdown $isOpen={isOpen}>
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
