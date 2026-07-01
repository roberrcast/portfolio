import { useTranslation } from "react-i18next";
import { interests } from "./data";
import * as S from "./styles";

// Use 'heading' instead of 'title' for the component's main title

export const Interests = () => {
    const { t } = useTranslation("interests");

    return (
        <S.SectionWrapper>
            <S.SectionHeader className="reveal reveal-up">
                {t("heading")}
            </S.SectionHeader>

            <S.BentoGrid className="reveal reveal-left">
                {interests.map((item) => {
                    const isRow = item.id === "artMusic";

                    // Getting tags safely from our i18next
                    const tags = t(`interestsBlocks.${item.id}.tags`, {
                        returnObjects: true,
                    }) as string[];

                    return (
                        <S.InterestCard key={item.id} $variant={item.variant}>
                            {!isRow && (
                                <>
                                    <S.UpperHeader>
                                        <S.InlineIcon className="material-symbols-outlined">
                                            {item.icon}
                                        </S.InlineIcon>

                                        {tags?.[0] && (
                                            <S.CategoryBadge>
                                                {tags[0]}
                                            </S.CategoryBadge>
                                        )}
                                    </S.UpperHeader>

                                    <S.ContentBlock>
                                        <S.CardTitle>
                                            {t(
                                                `interestsBlocks.${item.id}.title`,
                                            )}
                                        </S.CardTitle>

                                        <S.CardDescription>
                                            {t(
                                                `interestsBlocks.${item.id}.description`,
                                            )}
                                        </S.CardDescription>
                                    </S.ContentBlock>
                                </>
                            )}

                            {/* Full row card Art & Music*/}
                            {isRow && (
                                <>
                                    <S.ContentBlock>
                                        <S.CardTitle $variant="row">
                                            {t(
                                                `interestsBlocks.${item.id}.title`,
                                            )}
                                        </S.CardTitle>

                                        <S.CardDescription $variant="row">
                                            {t(
                                                `interestsBlocks.${item.id}.description`,
                                            )}
                                        </S.CardDescription>

                                        <S.TagContainer>
                                            {tags?.map((tag) => (
                                                <S.InterestTag key={tag}>
                                                    {tag}
                                                </S.InterestTag>
                                            ))}
                                        </S.TagContainer>
                                    </S.ContentBlock>

                                    <S.MediaFrame>
                                        <S.GraphicOverlay />

                                        <S.InlineIcon className="material-symbols-outlined">
                                            {item.icon}
                                        </S.InlineIcon>
                                    </S.MediaFrame>
                                </>
                            )}
                        </S.InterestCard>
                    );
                })}
            </S.BentoGrid>
        </S.SectionWrapper>
    );
};
