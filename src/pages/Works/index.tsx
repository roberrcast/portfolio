import { WorksGrid } from "../../components/WorksGrid";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const WorksPage = () => {
    const { t } = useTranslation("worksPage");
    const { t: tCommon } = useTranslation("common");

    useDocumentTitle(tCommon("nav.works"));

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
