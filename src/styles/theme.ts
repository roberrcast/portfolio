export const theme = {
    colors: {
        surface: "#1a1a1a",
        surfaceDim: "#333333",
        surfaceBright: "#393939",
        surfaceContainerLowest: "#0e0e0e",
        surfaceContainerLow: "#1b1b1b",
        surfaceContainer: "#1f1f1f",
        surfaceContainerHigh: "#2a2a2a",
        surfaceContainerHighest: "#353535",
        lowContrastOutline: "#2d3748",
        onSurface: "#e2e2e2",
        onSurfaceVariant: "#bdc9c6",
        inverseSurface: "#e2e2e2",
        inverseOnSurface: "#303030",
        outline: "#879391",
        outlineVariant: "#3d4947",
        surfaceTint: "#72d7cb",
        primary: "#b5fff4",
        onPrimary: "#003732",
        primaryContainer: "#81e6d9", // Teal accent
        onPrimaryContainer: "#00675f",
        inversePrimary: "#006a62",
        secondary: "#bdc7dc",
        onSecondary: "#273141",
        secondaryContainer: "#3d4759",
        onSecondaryContainer: "#abb5cb",
        tertiary: "#ffefdc",
        onTertiary: "#432c00",
        tertiaryContainer: "#ffcd7e",
        onTertiaryContainer: "#795510",
        error: "#ffb4ab",
        onError: "#690005",
        errorContainer: "#93000a",
        onErrorContainer: "#ffdad6",
        primaryFixed: "#8ff4e7",
        primaryFixedDim: "#72d7cb",
        onPrimaryFixed: "#00201d",
        onPrimaryFixedVariant: "#005049",
        secondaryFixed: "#d9e3f9",
        secondaryFixedDim: "#bdc7dc",
        onSecondaryFixed: "#121c2c",
        onSecondaryFixedVariant: "#3d4759",
        tertiaryFixed: "#ffdead",
        tertiaryFixedDim: "#efbf71",
        onTertiaryFixed: "#281900",
        onTertiaryFixedVariant: "#604100",
        background: "#000000",
        onBackground: "#e2e2e2",
        surfaceVariant: "#353535",
    },

    typography: {
        headlineXl: {
            fontFamily: '"Inter", Arial, Helvetica, sans-serif',
            size: "48px",
            weight: "700",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
        },

        headlineLg: {
            fontFamily: '"Inter", Arial, Helvetica, sans-serif',
            size: "32px",
            weight: "600",
            lineHeight: "1.3",
        },

        headlineLgMobile: {
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            size: "24px",
            weight: "600",
            lineHeight: "1.3",
        },

        bodyMd: {
            fontFamily: "'Mono', serif, monospace",
            size: "16px",
            weight: "400",
            lineHeight: "1.6",
        },

        bodySm: {
            fontFamily: "'Mono', serif",
            size: "16px",
            weight: "400",
            lineHeight: "1.5",
        },

        labelCaps: {
            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
            size: "12px",
            weight: "600",
            lineHeight: "1",
            letterSpacing: "0.1em",
        },
    },

    rounded: {
        sm: "0.5rem",
        default: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
    },

    spacing: {
        containerMax: "768px",
        gutter: "1.5rem",
        marginMobile: "1rem",
        sectionGap: "4rem",
    },
};

export type ThemeType = typeof theme;

/* Helper functions to keep DRY: avoid writing ${({ theme }) => theme.bla.bla}; */

/* Use it like this
    max-width: ${spacing("containerMax")};
*/

// For colors:
export const color =
    (key: keyof ThemeType["colors"], alpha: string = "") =>
    ({ theme }: { theme: ThemeType }) =>
        `${theme.colors[key]}${alpha}`;

// For spacing:
export const spacing =
    (key: keyof ThemeType["spacing"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.spacing[key];

// For border-radius and miscellaneous
export const rounded =
    (key: keyof ThemeType["rounded"]) =>
    ({ theme }: { theme: ThemeType }) =>
        theme.rounded[key];

// For fonts
export const font =
    (key: keyof ThemeType["typography"]) =>
    ({ theme }: { theme: ThemeType }) => {
        const { fontFamily, size, weight, lineHeight, letterSpacing } = theme
            .typography[key] as Record<string, string | undefined>;

        return `
font-family: ${fontFamily};
font-size: ${size};
font-weight: ${weight};
line-height: ${lineHeight};
${letterSpacing ? `letter-spacing: ${letterSpacing};` : ""}
`;
    };
