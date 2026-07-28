const GA_MEASUREMENT_ID = "G-S33LSKG5CL";

export const loadGoogleAnalytics = (): void => {
    if (document.getElementById("ga4-script")) return; // If already loaded, don't duplicate

    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(..._args: unknown[]) {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
    // send_page_view: false bc pageviews will be manually fired on route change(SPA)
};

export const trackPageview = (path: string): void => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
        page_path: path,
    });
};
