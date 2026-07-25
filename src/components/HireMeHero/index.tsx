import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const HireMeHero = () => {
    const { t } = useTranslation("hireMeHero");

    return (
        <S.HeroSection className="reveal reveal-up">
            <S.AvailabilityTag>{t("tag")}</S.AvailabilityTag>

            <S.Title>{t("title")}</S.Title>

            <S.Description>
                <Trans i18nKey="description" t={t}>
                    <Link to="/contact">contacto</Link>
                </Trans>
            </S.Description>

            <S.ButtonContainer>
                <S.CVButton
                    href="/assets/docs/CV_EN_Roberto-Rodriguez.pdf"
                    download
                    aria-label={`${t("downloadCvEn")} (PDF)`}
                >
                    <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                    >
                        description
                    </span>

                    <span className="font-body-md">Download CV (English)</span>
                </S.CVButton>

                <S.CVButton
                    href="/assets/docs/CV_ES_Roberto-Rodriguez.pdf"
                    download
                >
                    <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                        aria-label={`${t("downloadCvEs")} (PDF)`}
                    >
                        description
                    </span>

                    <span className="font-body-md">Descargue CV (Español)</span>
                </S.CVButton>
            </S.ButtonContainer>
        </S.HeroSection>
    );
};
