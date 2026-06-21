import * as S from "./styles";
import { projectData } from "./data";

export const FeaturedWorks: React.FC = () => {
    return (
        <S.WorksSection id="works">
            <S.SectionTitle className="reveal reveal-up">
                Featured Works
            </S.SectionTitle>
            <S.GridContainer>
                {projectData.map((project, index) => {
                    // Determines which way the card should slide from
                    const revealDirection =
                        index % 2 === 0 ? "reveal-left" : "reveal-right";

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
                                    alt={project.altText}
                                />
                            </S.ImageLinkWrapper>

                            <S.ContentArea>
                                <div>
                                    <S.CardHeader>
                                        <S.ProjectTitle>
                                            {project.title}
                                        </S.ProjectTitle>

                                        <S.ExternalLink href={project.link}>
                                            <span className="material-symbols-outlined">
                                                open_in_new
                                            </span>
                                        </S.ExternalLink>
                                    </S.CardHeader>

                                    <S.ProjectDescription>
                                        {project.description}
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
