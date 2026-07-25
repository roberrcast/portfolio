import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const HireMeTimeline = () => {
    const { t } = useTranslation("hireMeTimeline");

    return (
        <S.TimelineSection className="reveal reveal-right">
            <S.SectionHeader>
                <S.SectionTitle>{t("heading")}</S.SectionTitle>

                <S.DividerLine aria-hidden="true" />
            </S.SectionHeader>

            <S.TimelineContainer>
                {/* <-- Item 1 --> */}
                <S.TimelineItem>
                    <S.TimelineDot $isLatest={true} aria-hidden="true" />

                    <S.MetaRow>
                        <S.ItemTitle>{t("current.title")}</S.ItemTitle>

                        <S.DateSpan>{t("current.date")}</S.DateSpan>
                    </S.MetaRow>

                    <S.InstitutionText>
                        {t("current.subtitle")}
                    </S.InstitutionText>

                    <S.DescriptionText>
                        {t("current.description")}
                    </S.DescriptionText>
                </S.TimelineItem>

                {/* <-- Item 2 --> */}
                <S.TimelineItem>
                    <S.TimelineDot $isLatest={false} />

                    <S.MetaRow>
                        <S.ItemTitle>{t("school.title")}</S.ItemTitle>

                        <S.DateSpan>{t("school.date")}</S.DateSpan>
                    </S.MetaRow>

                    <S.InstitutionText>
                        {t("school.subtitle")}
                    </S.InstitutionText>

                    <S.DescriptionText>
                        {t("school.description")}
                    </S.DescriptionText>
                </S.TimelineItem>
            </S.TimelineContainer>
        </S.TimelineSection>
    );
};
