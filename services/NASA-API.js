const API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

const APOD_CACHE_KEY = "apod_cache";
const APOD_TTL = 6 * 60 * 60 * 1000; // 6 uren

function getApodCacheKey(date) {
    return date ? `${APOD_CACHE_KEY}:${date}` : APOD_CACHE_KEY;
}

async function fetchJson(url) {
    console.log(`Fetching JSON from ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kon NASA-data niet ophalen.");
    }

    return response.json();
}

export async function getApod(date = null, apiKey = API_KEY) {
    const cacheKey = getApodCacheKey(date);

    // Try localStorage cache first (browser only)
    if (typeof window !== "undefined" && window.localStorage) {
        try {
            const raw = localStorage.getItem(cacheKey);
            if (raw) {
                const cached = JSON.parse(raw);
                if (cached && cached.ts && Date.now() - cached.ts < APOD_TTL && cached.data) {
                    return cached.data;
                }
            }
        } catch {
            // ignore cache parsing errors
        }
    }

    const query = date ? `date=${date}&api_key=${apiKey}` : `api_key=${apiKey}`;
    const data = await fetchJson(`https://api.nasa.gov/planetary/apod?${query}`);

    // Store in cache for future requests
    try {
        if (typeof window !== "undefined" && window.localStorage) {
            const toStore = { ts: Date.now(), data };
            localStorage.setItem(cacheKey, JSON.stringify(toStore));
        }
    } catch {
        // ignore storage errors (quota, privacy blocks)
    }

    return data;
}

export async function getNeoObject(objectId = "3542519", apiKey = API_KEY) {
    return fetchJson(
        `https://api.nasa.gov/neo/rest/v1/neo/${objectId}?api_key=${apiKey}`,
    );
}

export async function getApodRange(startDate, endDate, apiKey = API_KEY) {
    // startDate and endDate should be YYYY-MM-DD strings
    const url = `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
    return fetchJson(url);
}