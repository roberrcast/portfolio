import { Form } from "../../components/Form";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation("contactPage");

    const LINKDATA = [
        {
            path: "https://github.com/roberrcast",
            icon: "code",
            label: "gitHub",
        },
        {
            path: "https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer",
            icon: "work",
            label: "linkedin",
        },
        {
            path: "https://www.instagram.com/rodriguezrobc",
            icon: "photo_camera",
            label: "instagram",
        },
    ];

    return (
        <>
            <S.HeadingContainer className="reveal reveal-up">
                <S.Heading>{t("heading")}</S.Heading>

                <S.SubHeading>{t("subHeading")}</S.SubHeading>
            </S.HeadingContainer>

            <Form />

            <S.FooterContainer className="reveal reveal-up">
                <S.DirectMailBlock>
                    <S.SubTitle>{t("direct")}</S.SubTitle>

                    <S.MailLink href="mailto:rob@robrodriguez">
                        rob@robrodriguez.dev
                    </S.MailLink>
                </S.DirectMailBlock>

                <S.SocialActionsRow>
                    {LINKDATA.map((item, index) => (
                        <S.SocialAnchor
                            key={index}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <S.IconCircle>
                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </S.IconCircle>
                            <S.PlatformLabel>{item.label}</S.PlatformLabel>
                        </S.SocialAnchor>
                    ))}
                </S.SocialActionsRow>
            </S.FooterContainer>
        </>
    );
};
