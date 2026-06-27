import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { me } from "../../assets";

export const AboutMeHeader = () => {
    const { t } = useTranslation("aboutHeader");

    return (
        <S.HeaderContainer className="reveal reveal-up">
            <S.AvatarWrapper>
                <S.GlowEffect />

                <S.ImageFrame>
                    <S.ProfileImage src={me} alt={t("altText")} />
                </S.ImageFrame>
            </S.AvatarWrapper>

            <S.TextGroup>
                <S.Title>
                    {t("title")}{" "}
                    <S.TitleAccent>{t("titleAccent")}</S.TitleAccent>
                </S.Title>

                <S.Subtitle>{t("subtitle")}</S.Subtitle>
            </S.TextGroup>
        </S.HeaderContainer>
    );
};
