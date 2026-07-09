import * as S from "./styles";
import { RouterLinkButton } from "../../common/RouterLinkButton";
import { useTranslation } from "react-i18next";

export const AboutMeCta = () => {
    const { t } = useTranslation("aboutCta");

    return (
        <S.CtaSection className="reveal reveal-up">
            <S.CtaHeading>{t("title")}</S.CtaHeading>

            <RouterLinkButton
                to={"/contact"}
                text={t("buttonText")}
                icon="arrow_forward"
                variant={S.ctaButtonTheme}
            />
        </S.CtaSection>
    );
};
