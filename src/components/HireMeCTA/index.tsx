import { useTranslation } from "react-i18next";
import * as S from "./styles";
import RouterLinkButton from "../../common/RouterLinkButton";

export const HireMeCta = () => {
    const { t } = useTranslation("hireMeCta");

    return (
        <S.CtaSection>
            <S.InnerContainer>
                <div>
                    <S.CtaTitle>{t("title")}</S.CtaTitle>

                    <S.CtaDescription>{t("text")}</S.CtaDescription>
                </div>

                <S.ButtonWrapper>
                    <RouterLinkButton
                        to="/contact"
                        text={t("buttonText")}
                        icon="forum"
                        iconPosition="left"
                        variant={S.contactButtonTheme}
                    />
                </S.ButtonWrapper>
            </S.InnerContainer>
        </S.CtaSection>
    );
};
