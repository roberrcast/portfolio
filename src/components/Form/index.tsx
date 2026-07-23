import * as S from "./styles";
import { useTranslation, Trans } from "react-i18next";
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
                            required
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                        />

                        <S.ErrorMessage
                            id="name-error"
                            $isVisible={!!errors.name}
                            role="alert"
                        >
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
                            required
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={
                                errors.email ? "email-error" : undefined
                            }
                        />

                        <S.ErrorMessage
                            id="email-error"
                            $isVisible={!!errors.email}
                            role="alert"
                        >
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
                        required
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                            errors.subject ? "subject-error" : undefined
                        }
                    />

                    <S.ErrorMessage
                        id="subject-error"
                        $isVisible={!!errors.subject}
                        role="alert"
                    >
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
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={
                            errors.message ? "message-error" : undefined
                        }
                    ></S.TextArea>

                    <S.ErrorMessage
                        id="message-error"
                        $isVisible={!!errors.message}
                        role="alert"
                    >
                        {errors.message}
                    </S.ErrorMessage>
                </S.InputWrapper>

                {/* Button & animation */}
                <S.ButtonWrapper>
                    <S.SubmitButton type="submit" $status={formStatus}>
                        {formStatus === "idle" && (
                            <>
                                <span>{t("button.submit")}</span>

                                <span
                                    className="material-symbols-outlined"
                                    aria-hidden="true"
                                >
                                    arrow_forward
                                </span>
                            </>
                        )}
                        {formStatus === "sending" && (
                            <>
                                <S.SpinnerIcon
                                    className="material-symbols-outlined"
                                    aria-hidden="true"
                                >
                                    progress_activity
                                </S.SpinnerIcon>
                                <span>{t("button.sending")}</span>
                            </>
                        )}

                        {formStatus === "success" && (
                            <>
                                <span
                                    className="material-symbols-outlined"
                                    aria-hidden="true"
                                >
                                    check_circle
                                </span>
                                <span>{t("button.sent")}</span>
                            </>
                        )}

                        {formStatus === "error" && (
                            <>
                                <span
                                    className="material-symbols-outlined"
                                    aria-hidden="true"
                                >
                                    error
                                </span>
                                <span>{t("button.error")}</span>
                            </>
                        )}
                    </S.SubmitButton>

                    <S.VisuallyHidden aria-libe="polite" className="sr-only">
                        {formStatus === "sending" && t("button.sending")}
                        {formStatus === "success" && t("button.sent")}
                        {formStatus === "error" && t("button.error")}
                    </S.VisuallyHidden>

                    <S.ErrorMessage $isVisible={formStatus === "error"}>
                        <Trans
                            i18nKey="errors.submitFailed"
                            t={t}
                            components={{ 1: <span /> }}
                        />
                    </S.ErrorMessage>
                </S.ButtonWrapper>
            </S.Form>
        </S.FormContainer>
    );
};
