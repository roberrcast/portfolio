import { useTranslation } from "react-i18next";

export const useNavLinks = () => {
    const { t } = useTranslation("common");

    return [
        { id: 1, name: t("nav.works"), path: "/works" },
        { id: 2, name: t("nav.about"), path: "/about" },
        { id: 3, name: t("nav.stack"), path: "/stack" },
        { id: 4, name: t("nav.contact"), path: "/contact" },
    ];
};
