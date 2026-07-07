import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../../hooks/useContactForm";

export const Form = () => {
    const { t } = useTranslation("form");

    const { formData, errors, formStatus, handleChange, handleSubmit } =
        useContactForm(t);

    return (
        <S.FormContainer className="reveal reveal-left">
            <S.GlowEffect />

            <S.Form
                action=""
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <S.InputGrid>
                    {/* ---> Name input <--- */}
                    <S.InputWrapper>
                        <S.Label htmlFor="name">{t("labels.name")}</S.Label>

                        <S.Input
                            id="name"
                            placeholder={t("placeholders.name")}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            $hasError={!!errors.name}
                        />

                        <S.ErrorMessage $isVisible={!!errors.name}>
                            {errors.name}
                        </S.ErrorMessage>
                    </S.InputWrapper>

                    {/* ---> Email input <--- */}
                    <S.InputWrapper>
                        <S.Label htmlFor="email">{t("labels.email")}</S.Label>

                        <S.Input
                            id="email"
                            placeholder={t("placeholders.email")}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            $hasError={!!errors.email}
                        />

                        <S.ErrorMessage $isVisible={!!errors.email}>
                            {errors.email}
                        </S.ErrorMessage>
                    </S.InputWrapper>
                </S.InputGrid>

                {/*  ---> Subject input <--- */}
                <S.InputWrapper>
                    <S.Label htmlFor="subject">{t("labels.subject")}</S.Label>

                    <S.Input
                        id="subject"
                        placeholder={t("placeholders.subject")}
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        $hasError={!!errors.subject}
                    />

                    <S.ErrorMessage $isVisible={!!errors.subject}>
                        {errors.subject}
                    </S.ErrorMessage>
                </S.InputWrapper>

                {/* ---> Message textarea <---*/}
                <S.InputWrapper>
                    <S.Label htmlFor="message">{t("labels.message")}</S.Label>

                    <S.TextArea
                        id="message"
                        name="message"
                        placeholder={t("placeholders.message")}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        $hasError={!!errors.message}
                    ></S.TextArea>

                    <S.ErrorMessage $isVisible={!!errors.message}>
                        {errors.message}
                    </S.ErrorMessage>
                </S.InputWrapper>

                {/* Button & animation */}
                <S.ButtonWrapper>
                    <S.SubmitButton type="submit" $status={formStatus}>
                        {formStatus === "idle" && (
                            <>
                                <span>{t("button.submit")}</span>

                                <span className="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </>
                        )}
                        {formStatus === "sending" && (
                            <>
                                <S.SpinnerIcon className="material-symbols-outlined">
                                    progress_activity
                                </S.SpinnerIcon>
                                <span>{t("button.sending")}</span>
                            </>
                        )}

                        {formStatus === "success" && (
                            <>
                                <span className="material-symbols-outlined">
                                    check_circle
                                </span>
                                <span>{t("button.sent")}</span>
                            </>
                        )}
                    </S.SubmitButton>
                </S.ButtonWrapper>
            </S.Form>
        </S.FormContainer>
    );
};
