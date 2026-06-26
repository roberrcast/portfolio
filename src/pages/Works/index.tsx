import { WorksGrid } from "../../components/WorksGrid";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const WorksPage = () => {
    const { t } = useTranslation("worksPage");

    return (
        <>
            <S.HeaderWrapper className="reveal reveal-up">
                <S.PageTitle>{t("title")}</S.PageTitle>
                <S.PageSubtitle>{t("subtitle")}</S.PageSubtitle>
            </S.HeaderWrapper>
            <WorksGrid />
        </>
    );
};
