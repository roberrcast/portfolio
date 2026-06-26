import { useTranslation } from "react-i18next";
import { worksData } from "./data";
import * as S from "./styles";

export const WorksGrid = () => {
    const { t } = useTranslation("works");

    const fullCards = worksData.filter((item) => item.variant === "full");
    const compactCards = worksData.filter((item) => item.variant === "compact");
    const rowCards = worksData.filter((item) => item.variant === "row");

    const renderTags = (tags: string[]) => (
        <S.TagContainer>
            {tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
            ))}
        </S.TagContainer>
    );

    return (
        <S.GridContainer>
            {fullCards.map((item, index) => (
                <S.ProjectCard
                    key={item.id}
                    className={`reveal ${index === 0 ? "reveal-left" : "reveal-right"}`}
                >
                    <S.ImageWrapper>
                        <S.ProjectImage
                            src={item.image}
                            loading="lazy"
                            alt={t(`works.${item.id}.altText`)}
                        />
                    </S.ImageWrapper>

                    <S.InfoWrapper>
                        {renderTags(item.tags)}

                        <S.ProjectTitle>
                            {t(`works.${item.id}.title`)}
                        </S.ProjectTitle>
                        <S.ProjectDescription>
                            {t(`works.${item.id}.description`)}
                        </S.ProjectDescription>
                        <S.ActionButton
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t(`works.${item.id}.viewProject`)}

                            <span className="material-symbols-outlined">
                                {item.icon}
                            </span>
                        </S.ActionButton>
                    </S.InfoWrapper>
                </S.ProjectCard>
            ))}

            <S.MainGrid className="reveal reveal-up">
                {compactCards.map((item) => (
                    <S.ProjectCard key={item.id}>
                        <S.ImageWrapper $variant="compact">
                            <S.ProjectImage
                                src={item.image}
                                loading="lazy"
                                alt={t(`works.${item.id}.altText`)}
                            />
                        </S.ImageWrapper>

                        <S.InfoWrapper>
                            {renderTags(item.tags)}

                            <S.ProjectTitle>
                                {t(`works.${item.id}.title`)}
                            </S.ProjectTitle>
                            <S.ProjectDescription>
                                {t(`works.${item.id}.description`)}
                            </S.ProjectDescription>
                            <S.ActionButton
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t(`works.${item.id}.viewProject`)}

                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </S.ActionButton>
                        </S.InfoWrapper>
                    </S.ProjectCard>
                ))}
            </S.MainGrid>

            {rowCards.map((item) => (
                <S.RowCard key={item.id} className="reveal reveal-left">
                    <div>
                        <S.ImageWrapper $variant="row">
                            <S.ProjectImage
                                src={item.image}
                                loading="lazy"
                                alt={t(`works.${item.id}.altText`)}
                            />
                        </S.ImageWrapper>

                        <S.InfoWrapper $variant="row">
                            {renderTags(item.tags)}

                            <S.ProjectTitle>
                                {t(`works.${item.id}.title`)}
                            </S.ProjectTitle>

                            <S.ProjectDescription>
                                {t(`works.${item.id}.description`)}
                            </S.ProjectDescription>

                            <S.ActionButton
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                $isTextLink={item.isTextLink}
                            >
                                {t(`works.${item.id}.viewProject`)}

                                <span className="material-symbols-outlined">
                                    {item.icon}
                                </span>
                            </S.ActionButton>
                        </S.InfoWrapper>
                    </div>
                </S.RowCard>
            ))}
        </S.GridContainer>
    );
};
