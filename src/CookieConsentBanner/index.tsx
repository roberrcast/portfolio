import { useState, useEffect } from "react";
import { loadGoogleAnalytics } from "../lib/analytics";
import { Button } from "../common/Button";
import * as S from "./styles";

type ConsentChoice = "accepted" | "declined";

export const CookieConsentBanner = () => {
    const [consent, setConsent] = useState<ConsentChoice | null>(
        () => localStorage.getItem("cookie-consent") as ConsentChoice | null,
    );

    useEffect(() => {
        if (consent === "accepted") loadGoogleAnalytics();
    }, [consent]);

    if (consent === null) return null;

    const handleChoice = (choice: ConsentChoice) => {
        localStorage.setItem("cookie-consent", choice);
        setConsent(choice);
    };

    return (
        <S.ConsentWrapper
            role="dialog"
            aria-live="polite"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
        >
            <S.IconWrapper>
                <span className="matarial-symbols-outlined" aria-hidden="true">
                    cookie
                </span>
            </S.IconWrapper>

            <S.Title id="cookie-consent-title">
                Digital Experience &amp; Cookies
            </S.Title>

            <S.Description id="cookie-consent-description">
                I use cookies to refine your digital experience. Minimalist,
                intentional, and strictly technical.
            </S.Description>

            <S.ButtonGroup>
                <Button
                    text="Accept"
                    variant={S.acceptButtonTheme}
                    onClick={() => handleChoice("accepted")}
                />

                <Button
                    text="Decline"
                    variant={S.declineButtonTheme}
                    onClick={() => handleChoice("declined")}
                />
            </S.ButtonGroup>
        </S.ConsentWrapper>
    );
};
