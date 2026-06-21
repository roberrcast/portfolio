import { backgroundData } from "./data";
import * as S from "./styles";

export const SectionAboutMe: React.FC = () => {
    const interests = [
        "Photography/Design",
        "Modern Web Dev Ecosystems",
        "System Design & UI Architechture",
    ];

    return (
        <S.AboutSection id="about" className="reveal reveal-up">
            <S.SectionTitle>The Craftsman</S.SectionTitle>

            <S.GridContainer>
                <S.BackgroundStack>
                    {backgroundData.map((pillar) => (
                        <S.PillarItem key={pillar.id}>
                            <S.IconContainer>
                                <span className="material-symbols-outlined">
                                    {pillar.icon}
                                </span>
                            </S.IconContainer>

                            <S.PillarContent>
                                <S.PillarTitle>{pillar.title}</S.PillarTitle>

                                <S.PillarText>{pillar.text}</S.PillarText>
                            </S.PillarContent>
                        </S.PillarItem>
                    ))}
                </S.BackgroundStack>

                <S.AmoledCard>
                    <S.CardLabel>Personal Interests</S.CardLabel>

                    <S.InterestsList>
                        {interests.map((interest, index) => (
                            <S.InterestItem key={index}>
                                <S.BulletDot />
                                {interest}
                            </S.InterestItem>
                        ))}
                    </S.InterestsList>
                </S.AmoledCard>
            </S.GridContainer>
        </S.AboutSection>
    );
};

export default SectionAboutMe;
