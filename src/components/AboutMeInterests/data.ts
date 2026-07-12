interface InterestsData {
    id: string;
    icon: string;
    variant?: "row";
}

export const interests: InterestsData[] = [
    { id: "photography", icon: "photo_camera" },
    { id: "system", icon: "coffee" },
    { id: "artMusic", icon: "palette", variant: "row" },
];
