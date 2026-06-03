const API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

const APOD_CACHE_KEY = "apod_cache";
const APOD_TTL = 6 * 60 * 60 * 1000; // 6 uren

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kon NASA-data niet ophalen.");
    }

    return response.json();
}

export async function getApod(apiKey = API_KEY) {
    // Try localStorage cache first (browser only)
    if (typeof window !== "undefined" && window.localStorage) {
        try {
            const raw = localStorage.getItem(APOD_CACHE_KEY);
            if (raw) {
                const cached = JSON.parse(raw);
                if (cached && cached.ts && Date.now() - cached.ts < APOD_TTL && cached.data) {
                    return cached.data;
                }
            }
        } catch (e) {
            // ignore cache parsing errors
        }
    }

    const data = await fetchJson(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

    // Store in cache for future requests
    try {
        if (typeof window !== "undefined" && window.localStorage) {
            const toStore = { ts: Date.now(), data };
            localStorage.setItem(APOD_CACHE_KEY, JSON.stringify(toStore));
        }
    } catch (e) {
        // ignore storage errors (quota, privacy blocks)
    }

    return data;
}

export async function getNeoObject(objectId = "3542519", apiKey = API_KEY) {
    return fetchJson(
        `https://api.nasa.gov/neo/rest/v1/neo/${objectId}?api_key=${apiKey}`,
    );
}