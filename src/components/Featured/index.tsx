import * as S from "./styles";
import { projectData } from "./data";
import { useTranslation } from "react-i18next";

export const FeaturedWorks: React.FC = () => {
    const { t } = useTranslation("featured");

    return (
        <S.WorksSection id="works">
            <S.SectionTitle className="reveal reveal-up">
                {t("sectionTitle")}
            </S.SectionTitle>
            <S.GridContainer>
                {projectData.map((project, index) => {
                    // Determines which way the card should slide from
                    const revealDirection =
                        index % 2 === 0 ? "reveal-left" : "reveal-right";

                    const title = t(`projects.${project.id}.title`);
                    const altText = t(`projects.${project.id}.altText`);
                    const description = t(`projects.${project.id}.description`);

                    return (
                        <S.ProjectCard
                            key={project.id}
                            $reverse={index % 2 !== 0}
                            className={`reveal ${revealDirection}`}
                        >
                            <S.ImageLinkWrapper
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={project.image}
                                    role="img"
                                    loading="lazy"
                                    alt={altText}
                                />
                            </S.ImageLinkWrapper>

                            <S.ContentArea>
                                <div>
                                    <S.CardHeader>
                                        <S.ProjectTitle>{title}</S.ProjectTitle>

                                        <S.ExternalLink href={project.link}>
                                            <span className="material-symbols-outlined">
                                                open_in_new
                                            </span>
                                        </S.ExternalLink>
                                    </S.CardHeader>

                                    <S.ProjectDescription>
                                        {description}
                                    </S.ProjectDescription>

                                    <S.TechTagGroup>
                                        {project.tags.map((tag) => (
                                            <S.TechTag key={tag}>
                                                {tag}
                                            </S.TechTag>
                                        ))}
                                    </S.TechTagGroup>
                                </div>
                            </S.ContentArea>
                        </S.ProjectCard>
                    );
                })}
            </S.GridContainer>
        </S.WorksSection>
    );
};

export default FeaturedWorks;
