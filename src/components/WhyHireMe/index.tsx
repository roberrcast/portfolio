import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const WhyHireMe = () => {
    const { t } = useTranslation("whyHire");

    const FEATURE_CARDS = [
        {
            icon: "handshake",
            label: t("collaborations.title"),
            text: t("collaborations.text"),
        },
        {
            icon: "architecture",
            label: t("architecture.title"),
            text: t("architecture.text"),
        },
    ];

    return (
        <S.PartnerSection>
            <S.SectionHeader>
                <S.SectionTitle>{t("heading")}</S.SectionTitle>

                <S.DividerLine />
            </S.SectionHeader>

            <S.CardContainer>
                <S.ContentGrid>
                    <S.TextColumn>
                        <S.ColumnTitle>{t("title")}</S.ColumnTitle>

                        <S.CardDescription>
                            {t("description")}
                        </S.CardDescription>
                    </S.TextColumn>

                    <S.FeaturesGrid>
                        {/* <-- items --> */}
                        {FEATURE_CARDS.map((item, index) => (
                            <S.FeatureCard key={index}>
                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>

                                <S.FeatureLabel>{item.label}</S.FeatureLabel>

                                <S.FeatureDesc>{item.text}</S.FeatureDesc>
                            </S.FeatureCard>
                        ))}
                    </S.FeaturesGrid>
                </S.ContentGrid>
            </S.CardContainer>
        </S.PartnerSection>
    );
};
