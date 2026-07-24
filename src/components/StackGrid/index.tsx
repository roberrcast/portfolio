import * as S from "./styles";

interface StackGridProps<T> {
    title: string;
    icon: string;
    items: T[];
    getImage: (item: T) => string;
    getLabel: (item: T) => string;
}

export const StackGrid = <T,>({
    title,
    icon,
    items,
    getImage,
    getLabel,
}: StackGridProps<T>) => {
    return (
        <S.SectionWrapper>
            <S.SectionHeader>
                <S.HeaderTitleGroup className="reveal reveal-left">
                    <S.IconFrame>
                        <span
                            className="material-symbols-outlined"
                            aria-hidden="true"
                        >
                            {icon}
                        </span>
                    </S.IconFrame>

                    <S.SectionTitle>{title}</S.SectionTitle>
                </S.HeaderTitleGroup>

                <S.GradientDivider
                    className="reveal reveal-right"
                    aria-hidden="true"
                />
            </S.SectionHeader>

            <S.BentoGrid>
                {items.map((item, index) => (
                    <S.ToolCard key={index} className="reveal-fast">
                        <S.CardInner>
                            <img src={getImage(item)} alt="" loading="lazy" />

                            <S.ToolTitle>{getLabel(item)}</S.ToolTitle>
                        </S.CardInner>
                    </S.ToolCard>
                ))}
            </S.BentoGrid>
        </S.SectionWrapper>
    );
};

export default StackGrid;
