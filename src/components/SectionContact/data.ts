interface SocialChannel {
    id: string;
    label: string;
    icon: string;
    href: string;
}

export const channelData: SocialChannel[] = [
    {
        id: "email",
        label: "Email",
        icon: "mail",
        href: "mailto:rob@robrodriguez.dev",
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        icon: "alternate_email",
        href: "https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer/",
    },
    {
        id: "github",
        label: "GitHub",
        icon: "code",
        href: "https://github.com/roberrcast",
    },
];
