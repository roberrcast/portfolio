import * as S from "./styles";
import { me } from "../../assets/index.ts";
import { useTranslation } from "react-i18next";
import LinkButton from "../../common/LinkButton.tsx";

export const Hero: React.FC = () => {
    const { t } = useTranslation("hero");

    return (
        <S.HeroContainer id="hero" className="reveal reveal-up">
            <S.ImageContainer>
                <img src={me} alt={t("profileAlt")} />
            </S.ImageContainer>

            <S.TextWrapper>
                <S.Title>Roberto Rodríguez</S.Title>

                <S.Subtitle>{t("subtitle")}</S.Subtitle>

                <S.Description>{t("description")}</S.Description>
            </S.TextWrapper>

            <S.ButtonWrapper>
                <LinkButton
                    href="#works"
                    text={t("viewProject")}
                    icon="arrow_downward"
                    variant={S.ctaButtonTheme}
                />
            </S.ButtonWrapper>
        </S.HeroContainer>
    );
};

export default Hero;
