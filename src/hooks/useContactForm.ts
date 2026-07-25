import { useState, useRef } from "react";
import type { TFunction } from "i18next";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type FormStatus = "idle" | "sending" | "success" | "error";

export const useContactForm = (t: TFunction) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    /* <-- Handle Change --> */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }

        if (formStatus === "error") {
            setFormStatus("idle");
        }
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;
        const newErrors: ContactFormData = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };

        if (!formData.name.trim()) {
            newErrors.name = t("errors.nameRequired");
            isValid = false;
        }

        const email = formData.email.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            newErrors.email = t("errors.emailInvalid");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = t("errors.emailInvalid");
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

        if (!isValid) {
            setErrors(newErrors);

            if (newErrors.name) {
                nameRef.current?.focus();
            } else if (newErrors.email) {
                emailRef.current?.focus();
            } else if (newErrors.subject) {
                subjectRef.current?.focus();
            } else if (newErrors.message) {
                messageRef.current?.focus();
            }

            return;
        }

        setFormStatus("sending");

        /* Helper to turn the formData object into Netlify's application/x-www-form-urlencoded data (like a classic HTML form POST) e.g. "key=value&key2=value2" */
        const encode = (data: Record<string, string>): string => {
            return Object.keys(data)
                .map(
                    (key) =>
                        encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(data[key]),
                )
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                "bot-field": "",
                ...formData,
            }),
        })
            .then(() => {
                setFormStatus("success");

                setTimeout(() => {
                    setFormStatus("idle");
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                }, 3000);
            })
            .catch(() => {
                setFormStatus("error");
            });
    };

    return {
        formData,
        errors,
        formStatus,
        handleChange,
        handleSubmit,
        nameRef,
        emailRef,
        subjectRef,
        messageRef,
    };
};
