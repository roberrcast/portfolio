import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const LanguageToggle = () => {
    const { i18n, t } = useTranslation("common");

    const isSpanish = i18n.language.startsWith("es");

    const handleToggle = () => {
        const nextLang = isSpanish ? "en" : "es";
        i18n.changeLanguage(nextLang);
    };

    return (
        <S.SwitchLabel
            $isChecked={isSpanish}
            htmlFor="lang-filter"
            aria-label={t("LanguageToggle")}
        >
            <input
                type="checkbox"
                id="lang-filter"
                checked={isSpanish}
                onChange={handleToggle}
            />

            <span>EN</span>
            <span>ES</span>
        </S.SwitchLabel>
    );
};
