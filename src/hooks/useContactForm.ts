import { useState } from "react";
import type { TFunction } from "i18next";

export const useContactForm = (t: TFunction) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<
        "idle" | "sending" | "success"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;
        let newErrors = { name: "", email: "", subject: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = t("errors.nameRequired");
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = t("errors.subjectRequired");
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = t("errors.messageRequired");
            isValid = false;
        }

        const email = formData.email.trim();

        if (!email) {
            newErrors.email = t("errors.emailInvalid");
            isValid = false;
        } else if (
            !(email.includes("@") && email.includes(".") && email.length > 5)
        ) {
            newErrors.email = t("errors.emailInvalid");
            isValid = false;
        }

        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        setFormStatus("sending");

        setTimeout(() => {
            setFormStatus("success");

            setTimeout(() => {
                setFormStatus("idle");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }, 3000);
        }, 1500);
    };

    return {
        formData,
        errors,
        formStatus,
        handleChange,
        handleSubmit,
    };
};
