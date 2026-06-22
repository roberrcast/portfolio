import { channelData } from "./data";
import * as S from "./styles";

export const SectionContact: React.FC = () => {
    return (
        <S.ContactSection id="contact" className="reveal reveal-up">
            <S.Title>Let's Build something exceptional.</S.Title>

            <S.Description>
                Currently open to new opportunities and collaborations. Drop a
                message or find me on social platforms.
            </S.Description>

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
