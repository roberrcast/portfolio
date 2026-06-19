import * as S from "./styles";
import me from "../../assets/me.webp";

export const Hero: React.FC = () => {
    return (
        <S.HeroContainer id="hero">
            <S.ImageContainer>
                <img src={me} alt="Roberto's profile image" />
            </S.ImageContainer>

            <S.TextWrapper>
                <S.Title>Roberto Rodríguez</S.Title>

                <S.Subtitle>Front End Engineer | Digital Craftsman</S.Subtitle>

                <S.Description>
                    Aspiring Front End Engineer specialized in building
                    responsive web applications with React, JavaScript, and
                    TypeScript.
                </S.Description>
            </S.TextWrapper>

            <S.ButtonWrapper>
                <S.PrimaryButton href="#works">
                    View My Projects
                    <span className="material-symbols-outlined">
                        arrow_downward
                    </span>
                </S.PrimaryButton>
            </S.ButtonWrapper>
        </S.HeroContainer>
    );
};

export default Hero;
