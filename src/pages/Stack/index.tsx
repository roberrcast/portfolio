import { StackHero } from "../../components/StackDescription";
import { useTranslation, Trans } from "react-i18next";
import StackGrid from "../../components/StackGrid";
import { frontEndStack, workflow } from "./data";
import { SectionWrapper, Paragraphs, ParagraphsContainer } from "./styles";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

interface StackItem {
    id: string;
    image: string;
    title: string;
}

export const StackPage = () => {
    const { t } = useTranslation("stackTools");
    const { t: tCommon } = useTranslation("common");

    useDocumentTitle(tCommon("nav.stack"));

    const descriptionKeys = ["block1", "block2"];

    return (
        <SectionWrapper>
            <StackHero />

            <StackGrid
                title={t("frontEnd")}
                icon="layers"
                items={frontEndStack}
                getImage={(item: StackItem) => item.image}
                getLabel={(item: StackItem) => item.title}
                getAlt={(item: StackItem) => t(`stack.${item.id}`)}
            />

            <StackGrid
                title={t("workflow")}
                icon="settings_suggest"
                items={workflow}
                getImage={(item: StackItem) => item.image}
                getLabel={(item: StackItem) => item.title}
                getAlt={(item: StackItem) => t(`stack.${item.id}`)}
            />

            <ParagraphsContainer className="reveal reveal-left">
                {descriptionKeys.map((key) => (
                    <Paragraphs key={key}>
                        <Trans
                            i18nKey={`description.${key}`}
                            t={t}
                            components={{ span: <span /> }}
                        />
                    </Paragraphs>
                ))}
            </ParagraphsContainer>
        </SectionWrapper>
    );
};
