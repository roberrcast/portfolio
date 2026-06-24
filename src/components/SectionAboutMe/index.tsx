import { backgroundData } from "./data";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const SectionAboutMe: React.FC = () => {
    const interestKeys = ["photography", "development", "ui"];

    const { t } = useTranslation("about");

    return (
        <S.AboutSection id="about" className="reveal reveal-up">
            <S.SectionTitle>{t("title")}</S.SectionTitle>

            <S.GridContainer>
                <S.BackgroundStack>
                    {backgroundData.map((pillar) => {
                        const label = t(`pillars.${pillar.id}.label`);
                        const description = t(
                            `pillars.${pillar.id}.description`,
                        );

                        return (
                            <S.PillarItem key={pillar.id}>
                                <S.IconContainer>
                                    <span className="material-symbols-outlined">
                                        {pillar.icon}
                                    </span>
                                </S.IconContainer>

                                <S.PillarContent>
                                    <S.PillarTitle>{label}</S.PillarTitle>

                                    <S.PillarText>{description}</S.PillarText>
                                </S.PillarContent>
                            </S.PillarItem>
                        );
                    })}
                </S.BackgroundStack>

                <S.AmoledCard>
                    <S.CardLabel>{t("subtitle")}</S.CardLabel>

                    <S.InterestsList>
                        {interestKeys.map((key, index) => (
                            <S.InterestItem key={index}>
                                <S.BulletDot />
                                {t(`personal.${key}`)}
                            </S.InterestItem>
                        ))}
                    </S.InterestsList>
                </S.AmoledCard>
            </S.GridContainer>
        </S.AboutSection>
    );
};

export default SectionAboutMe;
