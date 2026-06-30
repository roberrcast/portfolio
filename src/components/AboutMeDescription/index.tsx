import * as S from "./styles";
import { Trans, useTranslation } from "react-i18next";
import { paragraphs } from "./data";

export const AboutMeDescription = () => {
    const { t } = useTranslation("aboutDescription");

    return (
        <S.CardContainer className="reveal reveal-left">
            {paragraphs.map(({ id }) => (
                <S.Paragraph key={id}>
                    <Trans
                        i18nKey={`paragraphs.${id}.paragraph`}
                        t={t}
                        components={{ span: <span /> }}
                    />
                </S.Paragraph>
            ))}
        </S.CardContainer>
    );
};
