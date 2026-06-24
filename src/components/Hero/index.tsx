import * as S from "./styles";
import me from "../../assets/me.webp";
import { useTranslation } from "react-i18next";

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
                <S.PrimaryButton href="#works">
                    {t("viewProject")}
                    <span className="material-symbols-outlined">
                        arrow_downward
                    </span>
                </S.PrimaryButton>
            </S.ButtonWrapper>
        </S.HeroContainer>
    );
};

export default Hero;
