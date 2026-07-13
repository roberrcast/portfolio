import { useTranslation } from "react-i18next";
import { detailsData } from "./data";
import * as S from "./styles";

export const AboutDetails = () => {
    const { t } = useTranslation("aboutDetails");

    return (
        <S.DetailsSection>
            <S.SectionTitle>{t("title")}</S.SectionTitle>

            <S.GridContainer>
                {detailsData.map((item) => (
                    <S.DetailsCard key={item.id}>
                        <S.CardHeader>
                            <span className="material-symbols-outlined">
                                {item.icon}
                            </span>

                            <S.TagBadge>{t(`${item.id}.tag`)}</S.TagBadge>
                        </S.CardHeader>

                        <S.CardTitle>{t(`${item.id}.title`)}</S.CardTitle>

                        <S.CardText>{t(`${item.id}.text`)}</S.CardText>
                    </S.DetailsCard>
                ))}
            </S.GridContainer>
        </S.DetailsSection>
    );
};
