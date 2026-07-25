import * as S from "./styles";
import { projectData } from "./data";
import { useTranslation } from "react-i18next";

export const FeaturedWorks: React.FC = () => {
    const { t } = useTranslation("featured");

    return (
        <S.WorksSection id="works" aria-labelledby="works-heading">
            <S.SectionTitle className="reveal reveal-up" id="works-heading">
                {t("sectionTitle")}
            </S.SectionTitle>
            <S.GridContainer>
                {projectData.map((project, index) => {
                    // Determines which way the card should slide from
                    const revealDirection =
                        index % 2 === 0 ? "reveal-left" : "reveal-right";

                    const title = t(`projects.${project.id}.title`);
                    const description = t(`projects.${project.id}.description`);

                    return (
                        <S.ProjectCard
                            key={project.id}
                            $reverse={index % 2 !== 0}
                            className={`reveal ${revealDirection}`}
                        >
                            <S.ImageContainer>
                                <img
                                    src={project.image}
                                    loading="lazy"
                                    alt=""
                                    aria-hidden="true"
                                />
                            </S.ImageContainer>

                            <S.ContentArea>
                                <div>
                                    <S.CardHeader>
                                        <S.ProjectTitle>{title}</S.ProjectTitle>

                                        <S.ExternalLink
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${title} ${t("projects.opensInNew")}`}
                                        >
                                            <span
                                                className="material-symbols-outlined"
                                                aria-hidden="true"
                                            >
                                                open_in_new
                                            </span>
                                        </S.ExternalLink>
                                    </S.CardHeader>

                                    <S.ProjectDescription>
                                        {description}
                                    </S.ProjectDescription>

                                    <S.TechTagGroup
                                        aria-label={t("technologiesUsed")}
                                    >
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
