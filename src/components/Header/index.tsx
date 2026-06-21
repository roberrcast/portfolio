import * as S from "./styles";
import { Link } from "react-router-dom";

const NAV_LINKS = [
    { id: 1, name: "Works", path: "/works" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
];

export const Header = () => {
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
                    <S.HireMe>Hire Me</S.HireMe>

                    <S.LanguageToggle>
                        <span className="material-symbols-outlined">
                            language
                        </span>

                        <span>EN/ES</span>
                    </S.LanguageToggle>
                </S.ButtonsContainer>
            </S.NavContent>
        </S.Header>
    );
};
