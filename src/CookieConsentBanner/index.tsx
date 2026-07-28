import { useState, useEffect } from "react";
import { loadGoogleAnalytics } from "../lib/analytics";
import { Button } from "../common/Button";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

type ConsentChoice = "accepted" | "declined";

export const CookieConsentBanner = () => {
    const { t, i18n } = useTranslation("common");

    const [consent, setConsent] = useState<ConsentChoice | null>(
        () => localStorage.getItem("cookie-consent") as ConsentChoice | null,
    );

    useEffect(() => {
        if (consent === "accepted") loadGoogleAnalytics();
    }, [consent]);

    if (consent !== null) return null;

    const handleChoice = (choice: ConsentChoice) => {
        localStorage.setItem("cookie-consent", choice);
        setConsent(choice);
    };

    const isSpanish = i18n.language.startsWith("es");
    const toggleLanguage = () => {
        i18n.changeLanguage(isSpanish ? "en" : "es");
    };

    return (
        <S.ConsentWrapper
            role="dialog"
            aria-live="polite"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
        >
            <S.ConsentContainer>
                <S.IconWrapper>
                    <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                    >
                        cookie
                    </span>
                </S.IconWrapper>

                <S.Title id="cookie-consent-title">
                    {t("cookieConsent.title")}
                </S.Title>

                <S.Description id="cookie-consent-description">
                    {t("cookieConsent.description")}
                </S.Description>

                <S.LanguageSwitchLink onClick={toggleLanguage}>
                    {isSpanish ? "Read in English" : "Leer en español"}
                </S.LanguageSwitchLink>

                <S.ButtonGroup>
                    <Button
                        text={t("cookieConsent.accept")}
                        variant={S.acceptButtonTheme}
                        onClick={() => handleChoice("accepted")}
                    />

                    <Button
                        text={t("cookieConsent.decline")}
                        variant={S.declineButtonTheme}
                        onClick={() => handleChoice("declined")}
                    />
                </S.ButtonGroup>
            </S.ConsentContainer>
        </S.ConsentWrapper>
    );
};
