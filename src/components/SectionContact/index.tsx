import { channelData } from "./data";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const SectionContact: React.FC = () => {
    const { t } = useTranslation("contact");

    return (
        <S.ContactSection id="contact" className="reveal reveal-up">
            <S.Title>{t("title")}</S.Title>

            <S.Description>{t("subtitle")}</S.Description>

            <S.ChannelsGrid>
                {channelData.map((channel) => (
                    <S.ChannelLink
                        key={channel.id}
                        href={channel.href}
                        target={channel.id !== "email" ? "_blank" : undefined}
                        rel={
                            channel.id !== "email"
                                ? "noopener noreferrer"
                                : undefined
                        }
                    >
                        <span className="material-symbols-outlined">
                            {channel.icon}
                        </span>

                        <S.Label>{channel.label}</S.Label>
                    </S.ChannelLink>
                ))}
            </S.ChannelsGrid>
        </S.ContactSection>
    );
};

export default SectionContact;
