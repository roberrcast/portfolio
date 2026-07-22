import { useEffect } from "react";

export function useDocumentTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | Portfolio | Roberto Rodríguez`;
    }, [title]);
}
