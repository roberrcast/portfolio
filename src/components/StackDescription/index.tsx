import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const StackHero = () => {
    const { t } = useTranslation("stackHero");

    return (
        <S.HeroSection className="reveal reveal-up">
            <S.BadgeRow>
                <span className="material-symbols-outlined" aria-hidden="true">
                    terminal
                </span>

                <S.BadgeText>stack</S.BadgeText>
            </S.BadgeRow>

            <S.MainTitle>
                {t("title")} <S.AccentText>{t("accent")}</S.AccentText>
            </S.MainTitle>

            <S.Description>{t("description")}</S.Description>
        </S.HeroSection>
    );
};
